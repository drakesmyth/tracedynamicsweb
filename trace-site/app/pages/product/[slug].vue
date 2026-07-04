<script setup lang="ts">
import { getHardwareProduct, hardwareProducts } from '~/data/hardwareCatalog'

const route = useRoute()
const slug = computed(() => {
  const value = route.params.slug

  return Array.isArray(value) ? value.join('/') : String(value)
})

const product = computed(() => getHardwareProduct(slug.value))
const relatedProducts = computed(() =>
  hardwareProducts.filter((item) => item.slug !== slug.value),
)

useSeoMeta({
  title: () =>
    product.value ? `${product.value.title} | TRACE Shop` : 'Hardware | TRACE Shop',
  description: () =>
    product.value
      ? product.value.summary
      : 'TRACE hardware paths for contributor capture kits and embodied AI data collection.',
})

useScrollReveal()
</script>

<template>
  <div v-if="product">
    <HeroSection
      :eyebrow="product.eyebrow"
      :title="product.title"
      :lead="product.summary"
    >
      <template #actions>
        <BaseButton :to="product.primaryTo">
          {{ product.primaryLabel }}
        </BaseButton>
        <BaseButton :to="product.secondaryTo" variant="secondary">
          {{ product.secondaryLabel }}
        </BaseButton>
      </template>

      <template #visual>
        <MediaFrame
          :src="product.image"
          :alt="product.alt"
          :eyebrow="product.status"
          :caption="product.body"
          :fit="product.imageFit"
          aspect="wide"
        />
      </template>
    </HeroSection>

    <BaseSection>
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in product.specs"
          :key="item.label"
          :eyebrow="item.label"
          :title="item.value"
          :body="item.detail"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection
      eyebrow="Kit fit"
      title="Use the hardware where it creates useful physical data."
      lead="TRACE hardware is meant for validated capture sessions, not generic gadget checkout. Product access should match the contributor or research path."
      tone="soft"
    >
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <BaseCard
          tone="brand"
          eyebrow="Includes"
          title="What this path covers."
        >
          <ul class="grid gap-3">
            <li
              v-for="item in product.includes"
              :key="item"
              class="flex items-center gap-3 text-sm font-medium text-trace-ink"
            >
              <span
                class="h-2 w-2 shrink-0 rounded-full bg-trace-green"
                aria-hidden="true"
              />
              {{ item }}
            </li>
          </ul>
        </BaseCard>

        <BaseCard eyebrow="Best for" title="Where it belongs first.">
          <div class="flex flex-wrap gap-2">
            <BasePill
              v-for="item in product.bestFor"
              :key="item"
              tone="cyan"
            >
              {{ item }}
            </BasePill>
          </div>
        </BaseCard>
      </div>
    </BaseSection>

    <GradientBand>
      <div class="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <BaseHeading
          eyebrow="Availability"
          title="Checkout waits for the right operating layer."
          lead="TRACE can show the product path now, but paid checkout should come after inventory, contributor onboarding, capture rules, and terms are ready."
        />

        <BaseGrid :columns="3" gap="md">
          <BaseCard
            eyebrow="Status"
            :title="product.status"
            body="This label reflects the public product path today, not a live stock count."
          />
          <BaseCard
            eyebrow="Pricing"
            :title="product.price"
            body="Final pricing can be wired through Shopify once product schema and fulfillment rules are set."
          />
          <BaseCard
            eyebrow="Next step"
            title="Start with fit."
            body="The right path depends on the work being captured, sensor needs, and validation requirements."
          />
        </BaseGrid>
      </div>
    </GradientBand>

    <BaseSection
      eyebrow="Related hardware"
      title="TRACE kits are configured as a system."
      lead="The MMT core, body sensors, contributor path, and WELL validation flow are designed to work together."
    >
      <BaseGrid :columns="2" gap="lg">
        <BaseCard
          v-for="item in relatedProducts"
          :key="item.slug"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.summary"
        >
          <template #footer>
            <BaseButton :to="`/product/${item.slug}`" variant="secondary">
              View details
            </BaseButton>
          </template>
        </BaseCard>
      </BaseGrid>
    </BaseSection>

    <CtaPanel
      eyebrow="Hardware access"
      title="Start with the contributor path before checkout."
      lead="TRACE hardware creates governed data. The useful next step is onboarding, configuration fit, and capture guidance."
      :primary-label="product.primaryLabel"
      :primary-to="product.primaryTo"
      secondary-label="Back to shop"
      secondary-to="/shop"
    />
  </div>

  <div v-else>
    <HeroSection
      eyebrow="Shop"
      title="That hardware path is not in the current catalog."
      lead="The TRACE shop is still focused on the first contributor hardware paths. Return to the shop to see the active waitlist surfaces."
    >
      <template #actions>
        <BaseButton to="/shop">Return to shop</BaseButton>
        <BaseButton to="/request-access?path=hardware" variant="secondary">
          Join waitlist
        </BaseButton>
      </template>

      <template #visual>
        <ProductConfigPanel />
      </template>
    </HeroSection>

    <BaseSection
      eyebrow="Current hardware paths"
      title="Start with one of the active kit surfaces."
      lead="These are the hardware paths currently represented on the TRACE site."
    >
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in hardwareProducts"
          :key="item.slug"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.summary"
        >
          <template #footer>
            <BaseButton :to="`/product/${item.slug}`" variant="secondary">
              View details
            </BaseButton>
          </template>
        </BaseCard>
      </BaseGrid>
    </BaseSection>
  </div>
</template>
