<template>
  <nav class="d-flex pl-6 header_shadow rounded-xl w-full justify-space-between pr-4 white">
    <v-btn
      v-for="(item, i) in items"
      :key="`dn-${i}`"
      text
      plain
      :to="item.to"
      class="pa-2 fill-height"
      height="64px"
      active-class="active-nav-link font-weight-bold"
    >
      <span v-text="item.title" />
    </v-btn>
    <!-- <li class="p-2 h-full flex items-center text-sm text-brandPrimary-black hover:font-bold transition  duration-300">
      <a aria-current="page" class="active" href="/pishkhan">پیشخوان</a>
    </li><li class="p-2 h-full flex items-center text-sm text-brandPrimary-black hover:font-bold transition  duration-300">
      <a class="" href="/inquiry">گزارش اعتباری من</a>
    </li><li class="p-2 h-full flex items-center text-sm text-brandPrimary-black hover:font-bold transition  duration-300">
      <a class="" href="/share">گزارش اعتباری مشتریان من</a>
    </li><li class="p-2 h-full flex items-center text-sm text-brandPrimary-black hover:font-bold transition  duration-300">
      <a class="" href="/objection">اعتراض</a>
    </li><li class="w-fit cursor-pointer relative h-full flex items-center justify-between text-brandPrimary-dark">
      <div class="h-full flex flex-col justify-around">
        <div class="flex justify-between items-center">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 16.25V14.75C15 13.9544 14.6839 13.1913 14.1213 12.6287C13.5587 12.0661 12.7956 11.75 12 11.75H6C5.20435 11.75 4.44129 12.0661 3.87868 12.6287C3.31607 13.1913 3 13.9544 3 14.75V16.25" stroke="#454555" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 8.75C10.6569 8.75 12 7.40685 12 5.75C12 4.09315 10.6569 2.75 9 2.75C7.34315 2.75 6 4.09315 6 5.75C6 7.40685 7.34315 8.75 9 8.75Z" stroke="#454555" stroke-linecap="round" stroke-linejoin="round" /></svg><span class="whitespace-nowrap pl-3 pr-2 w-28 truncate  text-sm font-bold text-brandPrimary-black">5030049681</span><span class=""><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 7.25L9 11.75L13.5 7.25" stroke="#454555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
        </div><div class="flex justify-between items-center">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.49999V3.87548C12 3.25168 12 2.93978 11.8686 2.7481C11.7538 2.58063 11.576 2.46687 11.3758 2.4328C11.1467 2.39382 10.8635 2.52452 10.2971 2.78593L3.64426 5.85649C3.13913 6.08963 2.88656 6.20619 2.70158 6.38698C2.53804 6.54681 2.41321 6.74191 2.33663 6.95737C2.25 7.20108 2.25 7.47925 2.25 8.03559V11.75M12.375 11.375H12.3825M2.25 8.89999L2.25 13.85C2.25 14.6901 2.25 15.1101 2.41349 15.431C2.5573 15.7132 2.78677 15.9427 3.06901 16.0865C3.38988 16.25 3.80992 16.25 4.65 16.25H13.35C14.1901 16.25 14.6101 16.25 14.931 16.0865C15.2132 15.9427 15.4427 15.7132 15.5865 15.431C15.75 15.1101 15.75 14.6901 15.75 13.85V8.89999C15.75 8.05992 15.75 7.63988 15.5865 7.31901C15.4427 7.03677 15.2132 6.80729 14.931 6.66348C14.6101 6.49999 14.1901 6.49999 13.35 6.49999L4.65 6.49999C3.80992 6.49999 3.38988 6.49999 3.06901 6.66348C2.78677 6.80729 2.5573 7.03676 2.41349 7.31901C2.25 7.63987 2.25 8.05991 2.25 8.89999ZM12.75 11.375C12.75 11.5821 12.5821 11.75 12.375 11.75C12.1679 11.75 12 11.5821 12 11.375C12 11.1679 12.1679 11 12.375 11C12.5821 11 12.75 11.1679 12.75 11.375Z" stroke="#454555" stroke-linecap="round" stroke-linejoin="round" /></svg><span class="whitespace-nowrap px-3 w-28 truncate text-xs text-brandPrimary-black font-bold flex justify-start items-center"><span>0</span></span><span class="pr-2 text-xs text-gray-main"> ریال </span>
        </div>
      </div>
    </li> -->
  </nav>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { title: 'پیشخوان', to: '/dashboard' },
        { title: 'گزارش اعتباری من', to: '/dashboard/inquiry' },
        { title: 'گزارش اعتباری مشتریان من', to: '/dashboard/share' },
        { title: 'اعتراض', to: '/dashboard/objection' }
      ]
    }
  }
}
</script>
<style>

</style>
