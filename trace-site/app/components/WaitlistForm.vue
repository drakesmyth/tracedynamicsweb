<script setup lang="ts">
import type {
  RequestAccessPath,
  RequestAccessResponse,
} from '~~/types/site'

const props = withDefaults(
  defineProps<{
    defaultPath?: RequestAccessPath
    eyebrow?: string
    title?: string
    lead?: string
  }>(),
  {
    defaultPath: 'hardware',
    eyebrow: 'Request access',
    title: 'Tell TRACE where you fit.',
    lead:
      'Start with the path you need, the work you want to capture or study, and the team behind it.',
  },
)

const hardwarePath: {
  value: RequestAccessPath
  label: string
  detail: string
} = {
  value: 'hardware',
  label: 'Hardware waitlist',
  detail: 'MMT kits, body sensors, and contributor hardware access.',
}

const pathOptions: Array<{
  value: RequestAccessPath
  label: string
  detail: string
}> = [
  hardwarePath,
  {
    value: 'researcher',
    label: 'Research access',
    detail: 'WELL data access for embodied AI research and evaluation.',
  },
  {
    value: 'contributor',
    label: 'Contributor onboarding',
    detail: 'Real-world capture work, validation, and session credit.',
  },
]

const form = reactive<{
  name: string
  email: string
  path: RequestAccessPath
  organization: string
  focus: string
  website: string
}>({
  name: '',
  email: '',
  path: props.defaultPath,
  organization: '',
  focus: '',
  website: '',
})

const startedAt = ref(new Date().toISOString())
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const requestId = ref('')
const errorMessage = ref('')

const selectedPath = computed(
  () => pathOptions.find((option) => option.value === form.path) ?? hardwarePath,
)

const displayName = computed(() => form.name.trim().split(' ')[0] || 'there')
const isSubmitting = computed(() => status.value === 'submitting')

const parseSubmitError = (error: unknown) => {
  if (typeof error === 'object' && error && 'data' in error) {
    const data = (error as {
      data?: {
        message?: string
        statusMessage?: string
      }
    }).data

    return data?.statusMessage || data?.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return undefined
}

watch(
  () => props.defaultPath,
  (value) => {
    form.path = value
  },
)

const submitRequest = async () => {
  status.value = 'submitting'
  errorMessage.value = ''

  try {
    const response = await $fetch<RequestAccessResponse>('/api/request-access', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        path: form.path,
        organization: form.organization,
        focus: form.focus,
        website: form.website,
        startedAt: startedAt.value,
      },
    })

    requestId.value = response.requestId
    status.value = 'success'
  } catch (error) {
    errorMessage.value =
      parseSubmitError(error) ||
      'The request could not be sent. Please check the form and try again.'
    status.value = 'error'
  }
}

const resetRequest = () => {
  form.name = ''
  form.email = ''
  form.path = props.defaultPath
  form.organization = ''
  form.focus = ''
  form.website = ''
  startedAt.value = new Date().toISOString()
  requestId.value = ''
  errorMessage.value = ''
  status.value = 'idle'
}
</script>

<template>
  <form
    class="trace-card relative rounded-trace border border-trace-line p-5 shadow-glow sm:p-7"
    data-reveal
    @submit.prevent="submitRequest"
  >
    <div>
      <p class="text-sm font-semibold uppercase text-trace-blue">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 font-display text-3xl font-bold leading-tight text-trace-ink">
        {{ title }}
      </h2>
      <p class="mt-4 text-base leading-7 text-trace-muted">
        {{ lead }}
      </p>
    </div>

    <div class="mt-7 grid gap-5">
      <div class="grid gap-5 sm:grid-cols-2">
        <label class="grid gap-2 text-sm font-semibold text-trace-ink">
          Name
          <input
            v-model="form.name"
            class="min-h-12 rounded-[8px] border border-trace-line bg-white px-4 text-base font-medium text-trace-ink outline-none transition placeholder:text-trace-muted/65 focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
            name="name"
            autocomplete="name"
            placeholder="Your name"
            required
          >
        </label>

        <label class="grid gap-2 text-sm font-semibold text-trace-ink">
          Email
          <input
            v-model="form.email"
            class="min-h-12 rounded-[8px] border border-trace-line bg-white px-4 text-base font-medium text-trace-ink outline-none transition placeholder:text-trace-muted/65 focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="you@example.com"
            required
          >
        </label>
      </div>

      <label class="grid gap-2 text-sm font-semibold text-trace-ink">
        Access path
        <select
          v-model="form.path"
          class="min-h-12 rounded-[8px] border border-trace-line bg-white px-4 text-base font-medium text-trace-ink outline-none transition focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
          name="path"
        >
          <option
            v-for="option in pathOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <span class="text-sm font-medium leading-6 text-trace-muted">
          {{ selectedPath.detail }}
        </span>
      </label>

      <label class="grid gap-2 text-sm font-semibold text-trace-ink">
        Team or organization
        <input
          v-model="form.organization"
          class="min-h-12 rounded-[8px] border border-trace-line bg-white px-4 text-base font-medium text-trace-ink outline-none transition placeholder:text-trace-muted/65 focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
          name="organization"
          autocomplete="organization"
          placeholder="Lab, company, school, or independent"
        >
      </label>

      <label class="grid gap-2 text-sm font-semibold text-trace-ink">
        What should TRACE know?
        <textarea
          v-model="form.focus"
          class="min-h-32 resize-y rounded-[8px] border border-trace-line bg-white px-4 py-3 text-base font-medium leading-7 text-trace-ink outline-none transition placeholder:text-trace-muted/65 focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
          name="focus"
          placeholder="Tasks, hardware needs, research area, timeline, or capture setting"
          required
        />
      </label>

      <label
        aria-hidden="true"
        class="absolute -left-[100vw] h-px w-px overflow-hidden"
      >
        Website
        <input
          v-model="form.website"
          autocomplete="off"
          name="website"
          tabindex="-1"
        >
      </label>
    </div>

    <div class="mt-7 flex flex-wrap items-center gap-3">
      <BaseButton type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Request access' }}
      </BaseButton>
      <button
        class="min-h-10 rounded-trace px-4 py-2 text-sm font-semibold text-trace-muted transition hover:bg-trace-signal hover:text-trace-blue disabled:pointer-events-none disabled:opacity-50"
        type="button"
        :disabled="isSubmitting"
        @click="resetRequest"
      >
        Clear
      </button>
    </div>

    <p class="mt-4 text-sm leading-6 text-trace-muted">
      Your request goes straight to the TRACE team, who follow up about next steps.
    </p>

    <div
      v-if="status === 'error'"
      class="mt-6 rounded-[8px] border border-red-200 bg-red-50 p-4"
      role="alert"
    >
      <p class="font-semibold text-red-900">
        Request not sent.
      </p>
      <p class="mt-2 text-sm leading-6 text-red-800">
        {{ errorMessage }}
      </p>
    </div>

    <div
      v-if="status === 'success'"
      class="mt-6 rounded-[8px] border border-trace-green/30 bg-trace-signal p-4"
      role="status"
      aria-live="polite"
    >
      <p class="font-display text-xl font-semibold text-trace-ink">
        Thanks, {{ displayName }}.
      </p>
      <p class="mt-2 text-sm leading-6 text-trace-muted">
        Your {{ selectedPath.label.toLowerCase() }} request was accepted by the
        TRACE intake endpoint. Reference {{ requestId }}.
      </p>
    </div>
  </form>
</template>
