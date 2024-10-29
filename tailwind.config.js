/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
        backgroundImage: {
          'custom-header': "url('https://s3-alpha-sig.figma.com/img/28a8/2139/7e366c4046a5cb59ee6b6e330b880c0a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QSILv6FteCUdnmyMQd61GkuzajVu9qNnC8zA94N1ZIkJQOtA1ZhgzZyH0Q38GldL88SGGdO02qnFLPUXYW6dhuEzz~7qsdrBva10xnjpfvhOjc1xKZtYGW-l0svL6gQnpL7JxM-8g9~XPqQS03iTODKpdiB~DOcNRL5VripVjZql1FhoJ0nWkkFmrgvOkMIVzTmdrWJiLSz5ZKnAJaEVR7Ql9-ZZrDvEA7ddejU19Sf6mmVirpBv-0XROH-I~cg80mQ7-QVaNm4mUapiDO3qfEtA8AyRrmO9wXC2HZVRj7SCYrv~jAM3rBGad8EBKEG~ourzX9tZ7ItwSlzIr4vfwA__')", 
          
          'custom-watch': "url('https://s3-alpha-sig.figma.com/img/8762/5c8e/97d368e9f89637f4955bb71200fa5de9?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpNr4oD9ZjZx9jYfxCjcHyOM0l33Z-wcF-ijuo3cmkHtV6ezWQNGKvV1eCk9REfz9Yg0tdlrCOi0XqEvUSYTvST9ItNAV-DRwov0fVZ5CIwr2Yn92TktJlKbrLBe~yffPiWvV0FFXfaF3cWeK6mC72YEpJk-98-6LIkwg~h7GMmuCGkXnVvPVSYJlhdKIAHubqmgOJfUiUP7SrDhXqyN7EwuQ3d2~axiULArgc3He4cmylDgzA5AvO4lP0AS7WxA98xauJAp1uGcU2WFt2I3dBKGFAgL6GldS8aPnz-ISCEmp3xaTFWUtqaVhLDQLbJWb6G6FuvwjTiml55WkWKtwQ__')",

          'custom-bag': "url('https://s3-alpha-sig.figma.com/img/a5b0/eb2a/f76cc068b63c1ab30204c1b6d99d1b83?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKItcY8skak0g0A~ITSm-jor0Qa~yRuk6zlJ1yvoJb95MvffGPi1t1ci7nl8MWtST1kI99cjhGsb74ZNvBKbR8ZffWvayeYpN2qU71YEm~bARer5pB4Oj5DsOJbSmmChfNlxUswuNTHN963qF9smfsZo7KmeV8RDfygYGUHMpTUUQELOZZvSNNw3eQeEcuQW6KY1ynqULcf5GUMUBZkmg3aju1LHEe-2gVRkV-ilPeeuPO~S3-ODeWab1ue1wtsqrkCEJ1hQffmRXRGnK3amYb2KN9OXsXfgsEcsYG9WxW4ApxxyHKngwSvmbO0HQ2sdNjjIx-vsHE0g37X9-w8Tqw__')",

          'custom-clothes': "url('https://s3-alpha-sig.figma.com/img/e21c/8025/ddc31ae83567b865c1d996965ae8b839?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDj49TWfDmHsS5zBs3YnZjPU2f0ehc~xpkSTv9YRXODHT5lEKlhITMyZEnOZSRtBo13LaanAYDZad2qhl7yYIX6rbuSEp3ZvnMwigat05jCxnIok~~ym431PcSL9qg-WR1mI9lHd2EubIFpEo3hCcYTUB0qBgmw5Zjt6-RcnTDndvwMvyE2gwOdkRArqEB6OVDTRVYW33P97Lq-v72xHoAUmHiiAfxTkghhJ~N6xYzAHucOLAx~EwJSY5dQVz3reihSueMZG2dMlzC0lajHTtjseNPq~CVGj0iB0gj~bAQ4Lu2jP2REc6R0M9IjO5uhHOBMH4DNtgwgjOXxQTQ7Nhg__')",

          
        },
        
        colors: {
          customTeal: '#264653', 
          customRed: '#F83737',
          customLightBlue: '#7cafc4',
          customPeach: '#FFAE5D',
          Customgray: '#606060',
          lightPink: '#EFE6E6',
          customBlue: '#37BEF84A',
          customRed: '#F83737',
          darkGray: '#1E1E1E',
          customGraybesh: '#9A9A9A'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}