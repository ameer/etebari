<template>
  <common-dialog v-bind="$attrs" @input="close">
    <h3 class="text-center text-brandPrimary-main pb-6">
      اعتباریتو چیست؟
    </h3>
    <div class="my-10 m-auto px-6 lh-32 text-justify">
      <p>
        ﺍﻋﺘﺒﺎﺭﯾﺘﻮ ﺯﯾﺮﺳﺎﺧﺘﯽ ﺭﺍ ﻓﺮﺍﻫﻢ ﻣﯽﻧﻤﺎﯾﺪ ﺗﺎ ﺍﺷﺨﺎﺹ ﺑﺘﻮﺍﻧﻨﺪ ﺩﺭ ﻫﺮ ﺯﻣﺎﻥ ﻭﺍﺭﺩ ﭘﻨﻞ
        ﺷﺨﺼﯽ ﺧﻮﺩ ﺷﺪﻩ ﻭ ﻧﺴﺒﺖ ﺑﻪ ﻣﺪﯾﺮﯾﺖ ﺭﯾﺴﮏ ﺧﻮﺩ ﻭ ﮐﺴﺐ ﻭ ﮐﺎﺭﺷﺎﻥ ﺍﺯ ﺍﺑﺰﺍﺭﻫﺎﯼ
        ﺍﻋﺘﺒﺎﺭﺳﻨﺠﯽ ﺍﺳﺘﻔﺎﺩﻩ ﻧﻤﺎﯾﻨﺪ. ﺍﻋﺘﺒﺎﺭﺳﻨﺠﯽ ﺑﻪ ﺍﯾﻦ ﻣﻌﻨﺎﺳﺖ ﮐﻪ ﺑﺘﻮﺍﻧﯿﻢ ﺑﺎ
        ﺍﺳﺘﻔﺎﺩﻩ ﺍﺯ
        <a
          target="_blank"
          rel="noreferrer"
          class="cursor-help text-brandPrimary-light hover:text-brandSecondary-light"
          href="https://irancreditscoring.com/Page/creditreport"
        >ﮔﺰﺍﺭﺵ ﻭ ﺍﻣﺘﯿﺎﺯ ﺍﻋﺘﺒﺎﺭﯼ</a>، ﻣﯿﺰﺍﻥ ﺧﻮﺵﺣﺴﺎﺑﯽ ﯾﺎ ﺑﺪﺣﺴﺎﺑﯽ ﺧﻮﺩ ﯾﺎ ﺷﺨﺺ ﺛﺎﻟﺚ ﺩﺭ ﻗﺒﺎﻝ ﺗﻌﻬﺪﺍﺗﺶ ﺭﺍ ﺑﻪ ﺩﺭﺳﺘﯽ
        ﺍﺭﺯﯾﺎﺑﯽ ﻧﻤﺎﯾﯿﻢ. ﺑﻨﺎﺑﺮﺍﯾﻦ ﺷﻤﺎ ﺩﺭ ﺍﻋﺘﺒﺎﺭﯾﺘﻮ ﻣﯽﺗﻮﺍﻧﯿﺪ:
      </p>
      <ul class="pr-4 space-y-1" style="list-style: none !important;">
        <li>
          ❖
          <a
            target="_blank"
            rel="noreferrer"
            class="cursor-help text-brandPrimary-light hover:text-brandSecondary-light"
            href="https://irancreditscoring.com/Page/creditreport"
          >ﮔﺰﺍﺭﺵ ﺍﻋﺘﺒﺎﺭﯼ</a>
          ﺧﻮﺩﺗﺎﻥ ﺭﺍ ﺩﺭ ﻟﺤﻈﻪ ﺩﺭﯾﺎﻓﺖ ﻧﻤﻮﺩﻩ ﻭ ﺩﺭ ﺻﻮﺭﺗﯽ ﮐﻪ ﺗﻤﺎﯾﻞ ﺩﺍﺭﯾﺪ، ﺁﻥ ﺭﺍ ﺑﺎ
          ﺍﺷﺨﺎﺹ ﺩﯾﮕﺮ ﺩﺭ ﺳﻄﺢ ﺟﺎﻣﻌﻪ ﺑﻪ ﺍﺷﺘﺮﺍﮎ ﮔﺬﺍﺭﯾﺪ.
        </li>
        <li>
          ❖ ﺍﺯ ﻃﺮﯾﻖ ﻭﺭﻭﺩ ﺑﻪ ﭘﻨﻞ ﺍﺧﺘﺼﺎﺻﯽ ﺧﻮﺩ ﺁﮔﺎﻫﯽ ﭘﯿﺪﺍ ﻧﻤﺎﯾﯿﺪ ﮐﻪ ﭼﻪ ﺍﺷﺨﺎﺹ ﻭ ﯾﺎ
          ﺳﺎﺯﻣﺎﻥﻫﺎﯾﯽ ﺗﺎﮐﻨﻮﻥ ﮔﺰﺍﺭﺵ ﺍﻋﺘﺒﺎﺭﯾﺘﺎﻥ ﺭﺍ ﺍﺳﺘﻌﻼﻡ ﻧﻤﻮﺩﻩﺍﻧﺪ.
        </li>
        <li>
          ❖ ﺩﺭ ﺻﻮﺭﺗﯽ ﮐﻪ ﺩﺭ ﮔﺰﺍﺭﺵ ﺍﻋﺘﺒﺎﺭﯾﺘﺎﻥ ﻣﺸﮑﻠﯽ ﯾﺎ ﺍﺷﺘﺒﺎﻫﯽ ﻭﺟﻮﺩ ﺩﺍﺭﺩ، ﺁﻥ ﺭﺍ ﺍﺯ
          ﻃﺮﯾﻖ ﺛﺒﺖ ﺳﯿﺴﺘﻤﯽ ﺍﻋﺘﺮﺍﺽ ﭘﯿﮕﯿﺮﯼ ﻭ ﻣﺮﺗﻔﻊ ﻧﻤﺎﯾﯿﺪ.
        </li>
      </ul>
      <p>
        ﻫﻤﭽﻨﯿﻦ ﺩﺭ ﺻﻮﺭﺗﯽ ﮐﻪ ﺻﺎﺣﺐ ﮐﺴﺐ ﻭ ﮐﺎﺭ ﻫﺴﺘﯿﺪ ﻭ ﻗﺼﺪ ﺩﺍﺭﯾﺪ ﺍﺯ ﻃﺮﯾﻖ ﺍﻋﺘﺒﺎﺭﺳﻨﺠﯽ،
        ﻣﺸﺘﺮﯾﺎﻧﺘﺎﻥ ﺭﺍ ﺍﺭﺯﯾﺎﺑﯽ ﮐﻨﯿﺪ، ﺍﻋﺘﺒﺎﺭﯾﺘﻮ ﺍﯾﻦ ﺍﻣﮑﺎﻥ ﺭﺍ ﻓﺮﺍﻫﻢ ﻧﻤﻮﺩﻩ ﺗﺎ ﺍﺯ
        ﻃﺮﯾﻖ ﺍﯾﻦ ﺳﺎﻣﺎﻧﻪ، ﻣﺸﺘﺮﯾﺎﻧﺘﺎﻥ ﺑﺘﻮﺍﻧﻨﺪ ﺑﺎ ﺷﻤﺎ ﺍﻣﺘﯿﺎﺯ ﻭ ﮔﺰﺍﺭﺵ ﺍﻋﺘﺒﺎﺭﯼ ﺧﻮﺩ ﺭﺍ
        ﺑﻪ ﺍﺷﺘﺮﺍﮎ ﺑﮕﺬﺍﺭﻧﺪ. ﺑﻨﺎﺑﺮﺍﯾﻦ ﺷﻤﺎ ﻣﯽﺗﻮﺍﻧﯿﺪ ﺩﺭ ﺍﻋﺘﺒﺎﺭﯾﺘﻮ ﻭ ﺍﺯ ﻃﺮﯾﻖ
        ﺍﻋﺘﺒﺎﺭﺳﻨﺠﯽ، ﺭﯾﺴﮏ ﻣﺎﻟﯽ ﻭ ﺍﻋﺘﺒﺎﺭﯼ ﮐﺴﺐ ﻭ ﮐﺎﺭ ﺧﻮﺩ ﺭﺍ ﻣﺪﯾﺮﯾﺖ ﻧﻤﺎﯾﯿﺪ.
      </p>
    </div>
    <div class="d-flex align-center pa-4">
      <v-btn
        outlined
        color="primary darken-2"
        class="rounded-lg"
        style="border-width: 2px !important;"
        width="75%"
        height="46px"
      >
        مشاهده اطلاعات بیشتر
      </v-btn>
      <v-spacer />
      <v-btn class="flex-1" text width="20%" @click="close(false)">
        بستن
      </v-btn>
    </div>
  </common-dialog>
</template>
<script>
export default {
  methods: {
    close (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style></style>
