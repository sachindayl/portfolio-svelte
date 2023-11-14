<script lang="ts">
  import type { PackageI } from "../models/PackageI";

  export let packageItem: PackageI;
  let packageType = "once"
  let packagePrice = packageType === "once" ? packageItem.pricing.oneTime : packageItem.pricing.month;
  let isPopularStyling = packageItem.isPopular ? "border-teal-500" : "border-gray-300";
</script>
<div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="{isPopularStyling} h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden">
          {#if packageItem.isPopular}
            <span class="bg-teal-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
            {/if}
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium dark:text-white">{packageItem.name}</h2>
          <h1 class="text-5xl text-gray-900 dark:text-white pb-4 mb-4 border-b border-gray-200 leading-none">C${packagePrice}</h1>
          {#each packageItem.coverage as coverageItem}
            <p class="flex items-center text-gray-600 dark:text-white mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{coverageItem}
          </p>
            {/each}
          <p class="text-xs text-gray-500 dark:text-white mt-3">{packageItem.description}</p>
        </div>
      </div>
