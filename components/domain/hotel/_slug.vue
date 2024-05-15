<template>
  <div class="min-h-screen" :style="{
        background: `url(${require('@/assets/img/countryMobileBG.png')}) no-repeat, #000`,
        backgroundSize: '100% auto',
      }">
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center p-4 lg:pt-[130px] lg:px-16">
      <div class="flex flex-col gap-4">
        <h2 class="title_shadow font-bold text-center lg:text-left text-xl md:text-2xl lg:text-3xl">
          {{hotel.name}}
        </h2>
        <div class="flex items-center justify-center lg:justify-start gap-4">
          <svg width="26" height="26" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4018 20.0844C19.0335 20.0844 19.6589 19.9667 20.2425 19.738C20.8261 19.5094 21.3563 19.1742 21.803 18.7517C22.2496 18.3292 22.6039 17.8276 22.8457 17.2756C23.0874 16.7236 23.2118 16.1319 23.2118 15.5344C23.2118 14.9369 23.0874 14.3452 22.8457 13.7932C22.6039 13.2411 22.2496 12.7395 21.803 12.317C21.3563 11.8945 20.8261 11.5594 20.2425 11.3307C19.6589 11.1021 19.0335 10.9844 18.4018 10.9844C17.1261 10.9844 15.9027 11.4637 15.0006 12.317C14.0986 13.1703 13.5918 14.3276 13.5918 15.5344C13.5918 16.7411 14.0986 17.8984 15.0006 18.7517C15.9027 19.605 17.1261 20.0844 18.4018 20.0844Z" stroke="white" stroke-width="3"/>
            <path d="M5.4846 12.8806C8.52168 0.251436 28.3013 0.266019 31.3229 12.8952C33.0958 20.3035 28.2242 26.5744 23.9538 30.4535C22.4615 31.8149 20.4692 32.5757 18.3961 32.5757C16.3229 32.5757 14.3306 31.8149 12.8384 30.4535C8.58335 26.5744 3.71168 20.2889 5.4846 12.8806Z" stroke="white" stroke-width="3"/>
          </svg>
          <p class="text-lg md:text-xl lg:text-2xl text-[#EBE600] font-medium">
            {{hotel.address}}
          </p>
        </div>
        <div ref="splide" class="w-full splide">
          <div class="splide__track w-full md:w-[80%] mx-auto">
            <ul class="splide__list">
              <li v-for="(item, index) in hotel.images" :key="index" class="splide__slide">
                <img :src="item.url" alt="" class="w-full h-[400px] rounded-lg">
              </li>
            </ul>
          </div>
          <div class="custom-pagination flex justify-center mt-4">
            <button v-for="(item, index) in hotel.images" :key="index" class="mx-2">
              <img :src="item.url" class="w-10 h-10 rounded-md" alt="">
            </button>
          </div>
        </div>
        <p class="text-white font-medium sm:text-lg text-center sm:text-left">
          {{hotel.description}}
        </p>
      </div>
      <div class="w-1/2 lg:w-full mx-auto flex flex-col gap-6">
        <h2 class="uppercase text-[#EBE600] text-xl xl:text-2xl font-semibold text-center mb-4">
          Забронировать этот отель
        </h2>
        <Input placeholder="Дата заезда" v-model="form.startDate">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <g clip-path="url(#clip0_2699_370)">
              <path d="M10 3.14893V6.89893M20 3.14893V6.89893M4.375 12.0114H25.625M27.5 24.3989C27.5 25.3364 27.2375 26.2239 26.775 26.9739C26.3343 27.7145 25.7084 28.3276 24.9588 28.7528C24.2092 29.178 23.3618 29.4007 22.5 29.3989C21.2375 29.3989 20.0875 28.9364 19.2125 28.1489C18.825 27.8239 18.4875 27.4239 18.225 26.9739C17.7492 26.1994 17.4982 25.3079 17.5 24.3989C17.5 21.6364 19.7375 19.3989 22.5 19.3989C24 19.3989 25.3375 20.0614 26.25 21.0989C27.0539 22.0104 27.4983 23.1836 27.5 24.3989Z" stroke="#EBE600" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.25 11.2739V21.0989C25.3375 20.0614 24 19.3989 22.5 19.3989C19.7375 19.3989 17.5 21.6364 17.5 24.3989C17.5 25.3364 17.7625 26.2239 18.225 26.9739C18.4875 27.4239 18.825 27.8239 19.2125 28.1489H10C5.625 28.1489 3.75 25.6489 3.75 21.8989V11.2739C3.75 7.52393 5.625 5.02393 10 5.02393H20C24.375 5.02393 26.25 7.52393 26.25 11.2739Z" stroke="#EBE600" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.5 24.0239L20.5 24.0239M20.5 24.0239L22.5 26.0239M20.5 24.0239L22.5 22.0239" stroke="#EBE600"/>
              <path d="M14.9934 17.7739H15.0059M10.3672 17.7739H10.3797M10.3672 21.5239H10.3797" stroke="#EBE600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_2699_370">
              <rect width="30" height="30" fill="white" transform="translate(0 0.0239258)"/>
              </clipPath>
              </defs>
            </svg>
          </template>
        </Input>
        <Input placeholder="Дата выезда" v-model="form.endDate">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <g clip-path="url(#clip0_2699_370)">
              <path d="M10 3.14893V6.89893M20 3.14893V6.89893M4.375 12.0114H25.625M27.5 24.3989C27.5 25.3364 27.2375 26.2239 26.775 26.9739C26.3343 27.7145 25.7084 28.3276 24.9588 28.7528C24.2092 29.178 23.3618 29.4007 22.5 29.3989C21.2375 29.3989 20.0875 28.9364 19.2125 28.1489C18.825 27.8239 18.4875 27.4239 18.225 26.9739C17.7492 26.1994 17.4982 25.3079 17.5 24.3989C17.5 21.6364 19.7375 19.3989 22.5 19.3989C24 19.3989 25.3375 20.0614 26.25 21.0989C27.0539 22.0104 27.4983 23.1836 27.5 24.3989Z" stroke="#EBE600" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.25 11.2739V21.0989C25.3375 20.0614 24 19.3989 22.5 19.3989C19.7375 19.3989 17.5 21.6364 17.5 24.3989C17.5 25.3364 17.7625 26.2239 18.225 26.9739C18.4875 27.4239 18.825 27.8239 19.2125 28.1489H10C5.625 28.1489 3.75 25.6489 3.75 21.8989V11.2739C3.75 7.52393 5.625 5.02393 10 5.02393H20C24.375 5.02393 26.25 7.52393 26.25 11.2739Z" stroke="#EBE600" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.5 24.0239L20.5 24.0239M20.5 24.0239L22.5 26.0239M20.5 24.0239L22.5 22.0239" stroke="#EBE600"/>
              <path d="M14.9934 17.7739H15.0059M10.3672 17.7739H10.3797M10.3672 21.5239H10.3797" stroke="#EBE600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_2699_370">
              <rect width="30" height="30" fill="white" transform="translate(0 0.0239258)"/>
              </clipPath>
              </defs>
            </svg>
          </template>
        </Input>
        <Input placeholder="Взрослые" v-model="form.numberOfAdults">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M16.4097 4.02465C18.3497 4.02465 19.9097 5.59465 19.9097 7.52465C19.9097 9.41465 18.4097 10.9546 16.5397 11.0246C16.4534 11.0146 16.3661 11.0146 16.2797 11.0246M18.3397 20.0246C19.0597 19.8746 19.7397 19.5846 20.2997 19.1546C21.8597 17.9846 21.8597 16.0546 20.2997 14.8846C19.7497 14.4646 19.0797 14.1846 18.3697 14.0246M9.15973 10.8946C9.05973 10.8846 8.93973 10.8846 8.82973 10.8946C7.68193 10.8557 6.59437 10.3715 5.79736 9.54461C5.00034 8.71773 4.55647 7.6131 4.55973 6.46465C4.55973 4.01465 6.53973 2.02465 8.99973 2.02465C10.176 2.00343 11.3124 2.45034 12.1592 3.26706C13.0059 4.08378 13.4935 5.20341 13.5147 6.37965C13.5359 7.55588 13.089 8.69237 12.2723 9.5391C11.4556 10.3858 10.336 10.8734 9.15973 10.8946ZM4.15973 14.5846C1.73973 16.2046 1.73973 18.8446 4.15973 20.4546C6.90973 22.2946 11.4197 22.2946 14.1697 20.4546C16.5897 18.8346 16.5897 16.1946 14.1697 14.5846C11.4297 12.7546 6.91973 12.7546 4.15973 14.5846Z" stroke="#EBE600" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </Input>
        <Input placeholder="Дети" v-model="form.numberOfChildren">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
              <path d="M10.8214 19.8774V20.7212C10.3554 20.7212 9.97763 20.3434 9.97763 19.8774H10.8214ZM4.92863 14.0538V14.8976C4.68023 14.8976 4.44454 14.7882 4.28423 14.5986C4.12391 14.409 4.05529 14.1584 4.09657 13.9136L4.92863 14.0538ZM10.8214 3.68066C11.2875 3.68066 11.6651 4.05843 11.6651 4.52441C11.6651 4.9904 11.2875 5.36816 10.8214 5.36816V3.68066ZM3.09375 19.8774C3.09375 20.8639 3.90578 21.6807 4.92863 21.6807V23.3682C2.99273 23.3682 1.40625 21.8147 1.40625 19.8774H3.09375ZM4.92863 21.6807C5.95136 21.6807 6.76339 20.8639 6.76339 19.8774H8.45089C8.45089 21.8147 6.86441 23.3682 4.92863 23.3682V21.6807ZM6.76339 19.8774C6.76339 18.8908 5.95136 18.074 4.92863 18.074V16.3865C6.86441 16.3865 8.45089 17.94 8.45089 19.8774H6.76339ZM4.92863 18.074C3.90578 18.074 3.09375 18.8908 3.09375 19.8774H1.40625C1.40625 17.94 2.99273 16.3865 4.92863 16.3865V18.074ZM9.97763 19.8774C9.97763 17.1365 7.72661 14.8976 4.92863 14.8976V13.2101C8.63966 13.2101 11.6651 16.1857 11.6651 19.8774H9.97763ZM10.8214 19.0337H19.3929V20.7212H10.8214V19.0337ZM4.09657 13.9136L5.22619 7.21531L6.89017 7.49594L5.76056 14.1941L4.09657 13.9136ZM9.4401 3.68066H10.8214V5.36816H9.4401V3.68066ZM5.22619 7.21531C5.30888 6.72503 5.37818 6.3107 5.46199 5.97354C5.54827 5.62579 5.66325 5.30069 5.86665 4.9984L7.26671 5.9405C7.21609 6.01561 7.16164 6.13068 7.09965 6.3802C7.03508 6.64031 6.97714 6.98038 6.89017 7.49594L5.22619 7.21531ZM9.4401 5.36816C8.91169 5.36816 8.56147 5.36872 8.2899 5.38901C8.02867 5.40853 7.90189 5.44315 7.81582 5.48127L7.13194 3.93858C7.46437 3.7912 7.8048 3.73306 8.16413 3.7062C8.5131 3.68011 8.93678 3.68066 9.4401 3.68066V5.36816ZM5.86665 4.9984C6.17974 4.53303 6.61883 4.16607 7.13194 3.93858L7.81582 5.48127C7.59127 5.58083 7.40126 5.74049 7.26671 5.9405L5.86665 4.9984ZM20.2366 19.8774C20.2366 20.8639 21.0486 21.6807 22.0714 21.6807V23.3682C20.1355 23.3682 18.5491 21.8147 18.5491 19.8774H20.2366ZM22.0714 21.6807C23.0942 21.6807 23.9062 20.8639 23.9062 19.8774H25.5938C25.5938 21.8147 24.0073 23.3682 22.0714 23.3682V21.6807ZM23.9062 19.8774C23.9062 18.8908 23.0942 18.074 22.0714 18.074V16.3865C24.0073 16.3865 25.5938 17.94 25.5938 19.8774H23.9062ZM22.0714 18.074C21.0486 18.074 20.2366 18.8908 20.2366 19.8774H18.5491C18.5491 17.94 20.1355 16.3865 22.0714 16.3865V18.074Z" fill="#EBE600"/>
            </svg>
          </template>
        </Input>
        <Input placeholder="Телефон" v-model="form.phone">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
              <path d="M21.3746 19.7119V7.33691C21.4454 6.06978 21.0119 4.82614 20.1688 3.8776C19.3256 2.92905 18.1414 2.35269 16.8746 2.27441H10.1247C8.85798 2.35269 7.67374 2.92905 6.83059 3.8776C5.98744 4.82614 5.55389 6.06978 5.62467 7.33691V19.7119C5.55389 20.979 5.98744 22.2226 6.83059 23.1711C7.67374 24.1197 8.85798 24.696 10.1247 24.7743H16.8746C18.1414 24.696 19.3256 24.1197 20.1688 23.1711C21.0119 22.2226 21.4454 20.979 21.3746 19.7119Z" stroke="#EBE600" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 5.64941H11.25" stroke="#EBE600" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </Input>
        <Input placeholder="Имя" v-model="form.name">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
              <path d="M21.3746 19.7119V7.33691C21.4454 6.06978 21.0119 4.82614 20.1688 3.8776C19.3256 2.92905 18.1414 2.35269 16.8746 2.27441H10.1247C8.85798 2.35269 7.67374 2.92905 6.83059 3.8776C5.98744 4.82614 5.55389 6.06978 5.62467 7.33691V19.7119C5.55389 20.979 5.98744 22.2226 6.83059 23.1711C7.67374 24.1197 8.85798 24.696 10.1247 24.7743H16.8746C18.1414 24.696 19.3256 24.1197 20.1688 23.1711C21.0119 22.2226 21.4454 20.979 21.3746 19.7119Z" stroke="#EBE600" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 5.64941H11.25" stroke="#EBE600" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </Input>
        <Button class="w-full" @click="booking">
          <template #prev-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
              <path d="M2.4165 23.7843C1.916 23.7843 1.51025 24.1901 1.51025 24.6906C1.51025 25.1911 1.916 25.5968 2.4165 25.5968V23.7843ZM26.5832 25.5968C27.0837 25.5968 27.4894 25.1911 27.4894 24.6906C27.4894 24.1901 27.0837 23.7843 26.5832 23.7843V25.5968ZM6.00794 24.6906C6.00794 20.0611 9.80128 16.2927 14.4998 16.2927V14.4802C8.81748 14.4802 4.19544 19.043 4.19544 24.6906H6.00794ZM14.4998 16.2927C19.1984 16.2927 22.9918 20.0611 22.9918 24.6906H24.8043C24.8043 19.043 20.1821 14.4802 14.4998 14.4802V16.2927ZM12.0496 14.3896C12.0496 13.8937 12.3125 13.3807 12.8012 12.9653C13.2914 12.5486 13.9268 12.3052 14.4998 12.3052V10.4927C13.4531 10.4927 12.4103 10.9187 11.6272 11.5844C10.8425 12.2515 10.2371 13.2338 10.2371 14.3896H12.0496ZM14.4998 12.3052C15.0728 12.3052 15.7083 12.5486 16.1985 12.9653C16.6872 13.3807 16.9501 13.8937 16.9501 14.3896H18.7626C18.7626 13.2338 18.1572 12.2515 17.3725 11.5844C16.5894 10.9187 15.5466 10.4927 14.4998 10.4927V12.3052ZM16.9501 14.3896V16.051H18.7626V14.3896H16.9501ZM10.2371 14.3896V16.051H12.0496V14.3896H10.2371ZM2.4165 25.5968H26.5832V23.7843H2.4165V25.5968Z" fill="black"/>
              <path d="M14.5 6.56576V5.35742M19.9375 7.84923L18.8043 8.98242M10.1957 8.98242L9.0625 7.84922" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
          Забронировать
        </Button>
      </div>
    </div>
  </div>
  </template>
  <script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import Input from '@/components/ui/input.vue'
  import Button from '@/components/ui/button.vue'
  import Splide from '@splidejs/splide';
  export default {
    name: 'HotelComponent',
    components: {
      Button,
      Input,
    },
    computed: {
      ...mapState({
        hotel: state => state.hotels.hotel
      })
    },
    data() {
      return {
        form: {
          name: null,
          phone: null,
          numberOfAdults: null,
          numberOfChildren: null,
          startDate: null,
          endDate: null,
          name: null
        }
      }
    },
    methods: {
      ...mapMutations({
        loading_alert: 'alert/LOADING_ALERT'
      }),
      ...mapActions({
        get_hotel: 'hotels/get_hotel',
        booking_hotel: 'hotels/booking_hotel',
        success_alert: 'alert/success_alert',
        error_alert: 'alert/error_alert'
      }),
      async booking() {
        this.form.hotelId = this.$route.params.slug
        try {
          this.loading_alert()
          await this.booking_hotel(this.form)
          this.loading_alert('Ваша заявка успешно отправлена')
          this.form = {
            name: null,
            phone: null,
            numberOfAdults: null,
            numberOfChildren: null,
            startDate: null,
            endDate: null,
            name: null
          }
        } catch(err) {
          this.error_alert(err.response.data.errors[0].message)
        }
      },
      initSplide() {
        const splide = new Splide(this.$refs.splide, {
          pagination: false,
          arrows: false,
          transition: 'none',
          speed: 800,
        })
        splide.on('mounted', () => {
          // Добавляем обработчик события для переключения слайдов при клике на кастомную пагинацию
          const paginationButtons = document.querySelectorAll('.custom-pagination button');
          paginationButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
              splide.go(index);
            });
          });
        });
        splide.mount()
      },
    },
    async mounted() {
      await this.get_hotel(this.$route.params.slug)
      this.initSplide();
    }
  }
  </script>
  <style scoped>
  .title_color {
    background: linear-gradient(180deg, #FFF 0%, #C4C4C4 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>
  <style scoped>
  .title {
    background: linear-gradient(180deg, #FFF 0%, #C4C4C4 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: 700;
    text-transform: uppercase;
  }
  @media (max-width: 640px) {
    .title {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    }
  }
  .title_shadow {
    background: linear-gradient(180deg, #FFF 0%, #C4C4C4 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>
  