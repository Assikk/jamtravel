<template>
  <div class="transition_card flex flex-col md:flex-row gap-5 md:gap-[50px] cursor-pointer"
  @click="$router.push(`/hotel/${card.id}`)">
    <img class="hidden md:block w-full sm:w-[420px] md:h-inherit rounded-[20px]" src="@/assets/img/mainPageBG.png" alt="">
    <img class="block md:hidden w-full h-[240px] md:h-inherit rounded-[20px]" src="@/assets/img/2.png" alt="">
    <div class="flex flex-col gap-6">
      <h2 class="title">
        {{card.name}}
      </h2>
      <div class="flex justify-center md:justify-normal gap-[30px]">
        <div class="flex items-center gap-2.5 md:gap-[18px]">
          <svg class="block md:hidden" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2603_464)">
          <path d="M11.2153 12.2003C11.5723 12.2003 11.9258 12.13 12.2556 11.9934C12.5854 11.8567 12.885 11.6565 13.1374 11.4041C13.3899 11.1517 13.5901 10.852 13.7267 10.5222C13.8633 10.1924 13.9336 9.83894 13.9336 9.48197C13.9336 9.125 13.8633 8.77152 13.7267 8.44172C13.5901 8.11192 13.3899 7.81226 13.1374 7.55984C12.885 7.30743 12.5854 7.1072 12.2556 6.97059C11.9258 6.83398 11.5723 6.76367 11.2153 6.76367C10.4944 6.76367 9.80296 7.05006 9.29318 7.55984C8.7834 8.06962 8.49701 8.76103 8.49701 9.48197C8.49701 10.2029 8.7834 10.8943 9.29318 11.4041C9.80296 11.9139 10.4944 12.2003 11.2153 12.2003Z" stroke="#EBE600" stroke-width="2.52246"/>
          <path d="M3.91316 7.8966C5.62952 0.351577 16.8077 0.36029 18.5153 7.90531C19.5172 12.3313 16.7641 16.0776 14.3507 18.3952C13.5074 19.2085 12.3815 19.663 11.2099 19.663C10.0383 19.663 8.91233 19.2085 8.06902 18.3952C5.66437 16.0776 2.91122 12.3225 3.91316 7.8966Z" stroke="#EBE600" stroke-width="2.52246"/>
          </g>
          <defs>
          <clipPath id="clip0_2603_464">
          <rect width="20.91" height="20.91" fill="white" transform="translate(0.76001 0.499512)"/>
          </clipPath>
          </defs>
          </svg>
         <svg class="hidden md:block" width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.4018 20.0844C19.0335 20.0844 19.6589 19.9667 20.2425 19.738C20.8261 19.5094 21.3563 19.1742 21.803 18.7517C22.2496 18.3292 22.6039 17.8276 22.8457 17.2756C23.0874 16.7236 23.2118 16.1319 23.2118 15.5344C23.2118 14.9369 23.0874 14.3452 22.8457 13.7932C22.6039 13.2411 22.2496 12.7395 21.803 12.317C21.3563 11.8945 20.8261 11.5594 20.2425 11.3307C19.6589 11.1021 19.0335 10.9844 18.4018 10.9844C17.1261 10.9844 15.9027 11.4637 15.0006 12.317C14.0986 13.1703 13.5918 14.3276 13.5918 15.5344C13.5918 16.7411 14.0986 17.8984 15.0006 18.7517C15.9027 19.605 17.1261 20.0844 18.4018 20.0844Z" stroke="white" stroke-width="3"/>
          <path d="M5.4846 12.8806C8.52168 0.251436 28.3013 0.266019 31.3229 12.8952C33.0958 20.3035 28.2242 26.5744 23.9538 30.4535C22.4615 31.8149 20.4692 32.5757 18.3961 32.5757C16.3229 32.5757 14.3306 31.8149 12.8384 30.4535C8.58335 26.5744 3.71168 20.2889 5.4846 12.8806Z" stroke="white" stroke-width="3"/>
        </svg>
        <p class="text-white md:text-[#EBE600] text-xs md:text-2xl">
          {{card.address}}
        </p>
        </div>
        <div class="flex items-center gap-2.5 md:gap-[18px]">
          <svg class="block md:hidden" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.227 16.8574V18.8511C11.227 20.5402 9.65566 21.9053 7.72096 21.9053C5.78625 21.9053 4.20508 20.5402 4.20508 18.8511V16.8574C4.20508 18.5466 5.77643 19.7447 7.72096 19.7447C9.65566 19.7447 11.227 18.5368 11.227 16.8574Z" stroke="#EBE600" stroke-width="1.66074" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.2271 14.1567C11.2271 14.6477 11.0896 15.0995 10.8539 15.4923C10.2745 16.4449 9.08617 17.044 7.71125 17.044C6.33634 17.044 5.14801 16.4351 4.56858 15.4923C4.33288 15.0995 4.19543 14.6477 4.19543 14.1567C4.19543 13.3121 4.58825 12.5559 5.21678 12.0059C5.85514 11.4461 6.72916 11.1123 7.70142 11.1123C8.67368 11.1123 9.54777 11.4559 10.1861 12.0059C10.8343 12.546 11.2271 13.3121 11.2271 14.1567Z" stroke="#EBE600" stroke-width="1.66074" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.227 14.1568V16.8575C11.227 18.5467 9.65566 19.7449 7.72096 19.7449C5.78625 19.7449 4.20508 18.5369 4.20508 16.8575V14.1568C4.20508 12.4676 5.77643 11.1025 7.72096 11.1025C8.69322 11.1025 9.5673 11.4463 10.2057 11.9962C10.8342 12.5462 11.227 13.3122 11.227 14.1568Z" stroke="#EBE600" stroke-width="1.66074" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.2761 11.0735V13.0966C22.2761 13.6367 21.844 14.0787 21.294 14.0983H19.3692C18.3085 14.0983 17.3362 13.3225 17.2479 12.2618C17.1889 11.6431 17.4246 11.0637 17.8371 10.661C18.2005 10.2878 18.7013 10.0718 19.2513 10.0718H21.294C21.844 10.0914 22.2761 10.5334 22.2761 11.0735Z" stroke="#EBE600" stroke-width="1.66074" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.63416 10.6119V8.64772C2.63416 5.97645 4.24477 4.1105 6.74908 3.79623C7.00443 3.75695 7.26959 3.7373 7.54457 3.7373H16.3833C16.6387 3.7373 16.8842 3.74712 17.1199 3.7864C19.6537 4.08102 21.2937 5.95681 21.2937 8.64772V10.0718H19.251C18.701 10.0718 18.2002 10.2878 17.8368 10.661C17.4243 11.0636 17.1886 11.6431 17.2476 12.2618C17.3359 13.3224 18.3082 14.0983 19.3689 14.0983H21.2937V15.5223C21.2937 18.4686 19.3296 20.4327 16.3833 20.4327H13.9281" stroke="#EBE600" stroke-width="1.66074" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg class="hidden md:block" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4023 22.5V13.5" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M31.1523 13.5H27.2485C24.5721 13.5 22.4023 15.5146 22.4023 18C22.4023 20.4854 24.5721 22.5 27.2485 22.5H31.1523C31.2774 22.5 31.3398 22.5 31.3926 22.4969C32.2015 22.4475 32.8458 21.8493 32.8989 21.0981C32.9023 21.0491 32.9023 20.991 32.9023 20.8751V15.1249C32.9023 15.009 32.9023 14.9509 32.8989 14.9019C32.8458 14.1508 32.2015 13.5524 31.3926 13.5032C31.3398 13.5 31.2774 13.5 31.1523 13.5Z" stroke="white" stroke-width="2.25"/>
            <path d="M31.3498 13.5C31.2333 10.6915 30.8572 8.96962 29.6449 7.75735C27.8877 6 25.0591 6 19.4023 6H14.9023C9.24548 6 6.41707 6 4.6597 7.75735C2.90234 9.51472 2.90234 12.3431 2.90234 18C2.90234 23.6568 2.90234 26.4853 4.6597 28.2426C6.41707 30 9.24548 30 14.9023 30H19.4023C25.0591 30 27.8877 30 29.6449 28.2426C30.8572 27.0304 31.2333 25.3085 31.3498 22.5" stroke="white" stroke-width="2.25"/>
            <path d="M26.8887 18H26.9022" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="text-white md:text-[#EBE600] text-xs md:text-2xl">
            от {{card.minPrice}}USD
          </p>
        </div>
      </div>
      <p class="hidden md:block text-2xl text-white">
        {{card.description}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CountryCardComponent',
  props: {
    card: {}
  },
}
</script>
<style scoped>
.title {
  background: linear-gradient(180deg, #FFF 0%, #C4C4C4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  text-transform: uppercase;
}
@media only screen and (max-width: 640px) {
  .title {
    font-size: 22px;
    text-align: center;
    line-height: normal;
  }
}
.transition_card {
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
}
.transition_card:hover {
  box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
  transform: translateY(-5px);
}
</style>
