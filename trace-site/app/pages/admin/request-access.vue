<script setup lang="ts">
import type {
  RequestAccessListResponse,
  RequestAccessRecord,
} from '~~/types/site'

useSeoMeta({
  title: 'Request Access Admin',
  description: 'Review TRACE request access intake records.',
})

useHead({
  meta: [{ name: 'robots', content: 'noindex,nofollow' }],
})

const adminToken = ref('')
const limit = ref(100)
const records = ref<RequestAccessRecord[]>([])
const status = ref<'idle' | 'loading' | 'ready' | 'error'>('idle')
const errorMessage = ref('')

const safeLimit = computed(() => {
  const value = Number(limit.value)

  return Math.min(Math.max(Number.isFinite(value) ? Math.trunc(value) : 100, 1), 500)
})

const hasToken = computed(() => adminToken.value.trim().length > 0)
const isLoading = computed(() => status.value === 'loading')

const authHeaders = computed(() => ({
  authorization: `Bearer ${adminToken.value.trim()}`,
}))

const parseAdminError = (error: unknown) => {
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

const loadRecords = async () => {
  if (!hasToken.value) {
    status.value = 'error'
    errorMessage.value = 'Enter the configured admin token.'
    return
  }

  status.value = 'loading'
  errorMessage.value = ''

  try {
    const response = await $fetch<RequestAccessListResponse>(
      '/api/admin/request-access',
      {
        headers: authHeaders.value,
        query: {
          limit: safeLimit.value,
        },
      },
    )

    records.value = response.records
    status.value = 'ready'
  } catch (error) {
    errorMessage.value =
      parseAdminError(error) || 'Could not load request access records.'
    status.value = 'error'
  }
}

const downloadCsv = async () => {
  if (!hasToken.value) {
    status.value = 'error'
    errorMessage.value = 'Enter the configured admin token.'
    return
  }

  status.value = 'loading'
  errorMessage.value = ''

  try {
    const response = await fetch(
      `/api/admin/request-access?limit=${safeLimit.value}&format=csv`,
      {
        headers: authHeaders.value,
      },
    )

    if (!response.ok) {
      throw new Error(response.statusText || 'Could not download CSV.')
    }

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')

    anchor.href = url
    anchor.download = 'trace-request-access.csv'
    anchor.click()
    URL.revokeObjectURL(url)
    status.value = records.value.length ? 'ready' : 'idle'
  } catch (error) {
    errorMessage.value =
      parseAdminError(error) || 'Could not download request access CSV.'
    status.value = 'error'
  }
}

const clearRecords = () => {
  records.value = []
  errorMessage.value = ''
  status.value = 'idle'
}
</script>

<template>
  <div>
    <BaseSection>
      <div class="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <BaseHeading
          eyebrow="Admin"
          title="Request access intake"
          lead="Token-gated review and export for records accepted by the TRACE intake endpoint."
        />

        <form
          class="trace-card rounded-trace border border-trace-line p-5 shadow-glow sm:p-7"
          @submit.prevent="loadRecords"
        >
          <div class="grid gap-5">
            <label class="grid gap-2 text-sm font-semibold text-trace-ink">
              Admin token
              <input
                v-model="adminToken"
                autocomplete="off"
                class="min-h-12 rounded-[8px] border border-trace-line bg-white px-4 text-base font-medium text-trace-ink outline-none transition placeholder:text-trace-muted/65 focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
                placeholder="Paste token"
                type="password"
              >
            </label>

            <label class="grid gap-2 text-sm font-semibold text-trace-ink">
              Limit
              <input
                v-model.number="limit"
                class="min-h-12 rounded-[8px] border border-trace-line bg-white px-4 text-base font-medium text-trace-ink outline-none transition focus:border-trace-cyan focus:ring-4 focus:ring-trace-cyan/15"
                max="500"
                min="1"
                type="number"
              >
            </label>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <BaseButton type="submit" :disabled="isLoading">
              {{ isLoading ? 'Loading...' : 'Load records' }}
            </BaseButton>
            <BaseButton
              type="button"
              variant="secondary"
              :disabled="isLoading"
              @click="downloadCsv"
            >
              Download CSV
            </BaseButton>
            <button
              class="min-h-10 rounded-trace px-4 py-2 text-sm font-semibold text-trace-muted transition hover:bg-trace-signal hover:text-trace-blue disabled:pointer-events-none disabled:opacity-50"
              type="button"
              :disabled="isLoading"
              @click="clearRecords"
            >
              Clear
            </button>
          </div>

          <p
            v-if="status === 'error'"
            class="mt-5 rounded-[8px] border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-900"
            role="alert"
          >
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="Records"
      title="Latest intake requests"
      :lead="records.length ? `${records.length} records loaded.` : 'No records loaded.'"
      tone="soft"
    >
      <div class="overflow-x-auto rounded-trace border border-trace-line bg-white shadow-soft">
        <table class="min-w-[920px] w-full border-collapse text-left text-sm">
          <thead class="border-b border-trace-line bg-trace-signal/60 text-xs uppercase text-trace-blue">
            <tr>
              <th class="px-4 py-3 font-semibold">Received</th>
              <th class="px-4 py-3 font-semibold">Name</th>
              <th class="px-4 py-3 font-semibold">Email</th>
              <th class="px-4 py-3 font-semibold">Path</th>
              <th class="px-4 py-3 font-semibold">Organization</th>
              <th class="px-4 py-3 font-semibold">Focus</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-trace-line">
            <tr v-if="!records.length">
              <td class="px-4 py-6 text-trace-muted" colspan="6">
                Enter an admin token and load records.
              </td>
            </tr>
            <tr
              v-for="record in records"
              :key="record.id"
              class="align-top text-trace-ink"
            >
              <td class="whitespace-nowrap px-4 py-4 text-trace-muted">
                {{ new Date(record.receivedAt).toLocaleString() }}
              </td>
              <td class="px-4 py-4 font-semibold">{{ record.name }}</td>
              <td class="px-4 py-4">{{ record.email }}</td>
              <td class="px-4 py-4 capitalize">{{ record.path }}</td>
              <td class="px-4 py-4">{{ record.organization || 'Independent' }}</td>
              <td class="max-w-md px-4 py-4 leading-6 text-trace-muted">
                {{ record.focus }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseSection>
  </div>
</template>
