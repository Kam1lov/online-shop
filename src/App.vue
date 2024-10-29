<script setup>
</script>

<template>
  <div class="max-w-[1980px] min-w-[700px] mx-auto px-4">
    <header class="bg-custom-header bg-cover bg-center w-full h-[1020px] md:h-[983px] font-poppins">
      <nav class="w-full h-[70px] flex text-white items-center justify-between px-4">
        <h1 class="text-[24px] md:text-[32px]">shopacart</h1>
        <ul class="flex text-[14px] md:text-[16px] gap-4 md:gap-6 items-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
          <li class="bg-customRed w-[84px] h-[39px] flex items-center justify-center">
            <button>Register</button>
          </li>
          <li class="bg-customRed w-[84px] h-[39px] flex items-center justify-center">
            <button>Sign In</button>
          </li>
        </ul>
      </nav>

      <div class="text-white text-[24px] md:text-[48px] lg:text-[96px] flex flex-col mt-[170px] mx-4 p-4 md:p-0">
        <h1>We picked</h1>
        <h1 class="flex gap-3">
          some <span class="text-customPeach">cool</span>
        </h1>
        <h1 class="flex gap-3">
          <span class="text-customPeach">things</span> for you!
        </h1>
      </div>
    </header>

    <section>
      <div class="flex flex-col gap-[90px]">
        <div class="flex justify-center text-center items-center">
          <nav class="flex flex-wrap list-none gap-[43px] text-grayCustom text-[14px] md:text-[16px] cursor-pointer">
            <li>
              <router-link to="/">Fresh</router-link>
            </li>
            <li>
              <router-link to="/">Today’s Deals</router-link>
            </li>
            <li>
              <router-link to="/">Gift Cards</router-link>
            </li>
            <li>
              <router-link to="/">Women Clothing</router-link>
            </li>
            <li>
              <router-link to="/">Mobiles</router-link>
            </li>
            <li>
              <router-link to="/">Men Clothing</router-link>
            </li>
            <li>
              <router-link to="/">Kids Clothing</router-link>
            </li>
            <li>
              <router-link to="/">Health</router-link>
            </li>
            <li>
              <router-link to="/">Pet corner</router-link>
            </li>
            <li>
              <router-link to="/">Books</router-link>
            </li>
            <li>
              <router-link to="/">Beauty</router-link>
            </li>
            <li>
              <router-link to="/">Kitchen</router-link>
            </li>
            <li>
              <router-link to="/">Bed Room</router-link>
            </li>
            <li>
              <router-link to="/">Sport</router-link>
            </li>
            <li>
              <router-link to="/">Bags</router-link>
            </li>
          </nav>
        </div>

        <div class="flex flex-wrap justify-center gap-[34px]">
          <div
            class="bg-custom-watch bg-cover bg-center w-[592px] h-[392px] text-center flex justify-center items-center">
            <h1 class="text-[24px] text-white drop-shadow-2xl">Watches</h1>
          </div>

          <div
            class="bg-custom-bag bg-cover bg-center w-[592px] h-[392px] text-center flex justify-center items-center">
            <h1 class="text-[24px] text-white drop-shadow-2xl">Jewries</h1>
          </div>

          <div
            class="bg-custom-clothes bg-cover bg-center w-[592px] h-[392px] text-center flex justify-center items-center">
            <h1 class="text-[24px] text-white drop-shadow-2xl">Clothing</h1>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-[69px]">
          <h1 class="text-customRed text-[20px]">Trending Now</h1>

          <div class="flex flex-wrap justify-center gap-[27px]">
            <div class="w-[349px] h-[480px] bg-lightPink flex flex-col justify-center items-center gap-4 p-[50px]">
              <div class="bg-customBlue w-[282px] h-[157px] flex justify-center items-center text-center">
                <img class="w-[135px] h-[153px]" src="./assets/img/watch.png" alt="">
              </div>

              <div class="flex flex-col justify-center items-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burgar</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px]">
                <p class="text-customRed p-[10px]">$150</p>
                <button class="bg-customRed w-[100px] h-[40px] text-white">Buy Now</button>
              </div>
            </div>

            <!-- Repeat the same block for other items -->
            <div class="w-[349px] h-[480px] bg-lightPink flex flex-col justify-center items-center gap-4 p-[50px]">
              <div class="bg-customBlue w-[282px] h-[157px] flex justify-center items-center text-center">
                <img class="w-[135px] h-[153px]" src="./assets/img/watch.png" alt="">
              </div>

              <div class="flex flex-col justify-center items-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px]">
                <p class="text-customRed p-[10px]">$150</p>
                <button class="bg-customRed w-[100px] h-[40px] text-white">Buy Now</button>
              </div>
            </div>

            <div class="w-[349px] h-[480px] bg-lightPink flex flex-col justify-center items-center gap-4 p-[50px]">
              <div class="bg-customBlue w-[282px] h-[157px] flex justify-center items-center text-center">
                <img class="w-[135px] h-[153px]" src="./assets/img/watch.png" alt="">
              </div>

              <div class="flex flex-col justify-center items-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px]">
                <p class="text-customRed p-[10px]">$150</p>
                <button class="bg-customRed w-[100px] h-[40px] text-white">Buy Now</button>
              </div>
            </div>


            <div class="w-[349px] h-[480px] bg-lightPink flex flex-col justify-center items-center gap-4 p-[50px]">
              <div class="bg-customBlue w-[282px] h-[157px] flex justify-center items-center text-center">
                <img class="w-[135px] h-[153px]" src="./assets/img/watch.png" alt="">
              </div>

              <div class="flex flex-col justify-center items-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px]">
                <p class="text-customRed p-[10px]">$150</p>
                <button class="bg-customRed w-[100px] h-[40px] text-white">Buy Now</button>
              </div>
            </div>


            <div class="w-[349px] h-[480px] bg-lightPink flex flex-col justify-center items-center gap-4 p-[50px]">
              <div class="bg-customBlue w-[282px] h-[157px] flex justify-center items-center text-center">
                <img class="w-[135px] h-[153px]" src="./assets/img/watch.png" alt="">
              </div>

              <div class="flex flex-col justify-center items-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px]">
                <p class="text-customRed p-[10px]">$150</p>
                <button class="bg-customRed w-[100px] h-[40px] text-white">Buy Now</button>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center text-center p-4">
  <img src="./assets/img/image 1.png" alt="Image Description" class="max-w-full h-auto" />
</div>

        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col justify-center items-center gap-8">
        <h1 class="text-[20px text-darkGray]">Mobile Phones</h1>

        <div class="flex flex-wrap justify-center gap-[105px] ">
          <div class="flex gap-[78px]">
            <div class="items-center justify-center flex flex-col gap-5">
              <div class="">
                <img class="h-[300px]" src="./assets/img/pngwing_1__2_-removebg-preview.png " alt="">
              </div>

              <div class="flex flex-col justify-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px] p-3">
                <p class="text-customRed p-[5px]">$150</p>
                <button class="bg-customRed w-[80px] h-[30px] text-white">Buy Now</button>
              </div>
            </div>
            <div>
              <img src="./assets/img/Line 2.png" alt="">
            </div>
          </div>

          <div class="flex gap-[78px]">
            <div class="items-center justify-center flex flex-col gap-5">
              <div class="">
                <img class="h-[300px]" src="./assets/img/pngwing_1__1_-removebg-preview.png" alt="">
              </div>

              <div class="flex flex-col justify-center gap-4 ">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px] p-3">
                <p class="text-customRed p-[5px]">$150</p>
                <button class="bg-customRed w-[80px] h-[30px] text-white">Buy Now</button>
              </div>
            </div>
            <div>
              <img src="./assets/img/Line 2.png" alt="">
            </div>
          </div>

          <div class="flex gap-[78px]">
            <div class="items-center justify-center flex flex-col gap-5">
              <div class="">
                <img class="h-[300px]" src="./assets/img/pngwing_1__2_-removebg-preview.png " alt="">
              </div>

              <div class="flex flex-col justify-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px] p-3">
                <p class="text-customRed p-[5px]">$150</p>
                <button class="bg-customRed w-[80px] h-[30px] text-white">Buy Now</button>
              </div>
            </div>
            <div>
              <img src="./assets/img/Line 2.png" alt="">
            </div>
          </div>

          <div class="flex gap-[75px]">
            <div class="items-center justify-center flex flex-col gap-5">
              <div class="">
                <img class="h-[300px]" src="./assets/img/pngwing_1__3_-removebg-preview.png " alt="">
              </div>

              <div class="flex flex-col justify-center gap-4">
                <h1 class="text-customRed text-[12px]">New Burger</h1>
                <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                  Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
                <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

                <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
              </div>

              <div class="flex gap-[150px] p-3">
                <p class="text-customRed p-[5px]">$150</p>
                <button class="bg-customRed w-[80px] h-[30px] text-white">Buy Now</button>
              </div>
            </div>
            <div>
              <img src="./assets/img/Line 2.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="flex flex-col justify-center items-center gap-8 ">
        <h1 class="text-[20px]">Defactor Store</h1>

        <div class="flex flex-wrap justify-center gap-[50px]">
          <div>
            <img src="./assets/img/image 2.png" alt=""><br>

            <div class="flex flex-col justify-center gap-4">
              <h1 class="text-customRed text-[12px]">New Burger</h1>
              <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
              <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

              <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
            </div>
          </div>


          <div>
            <img src="./assets/img/image 2.png" alt=""><br>

            <div class="flex flex-col justify-center gap-4">
              <h1 class="text-customRed text-[12px]">New Burger</h1>
              <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
              <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

              <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
            </div>
          </div>

          <div>
            <img src="./assets/img/image 2.png" alt=""><br>

            <div class="flex flex-col justify-center gap-4">
              <h1 class="text-customRed text-[12px]">New Burger</h1>
              <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
              <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

              <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
            </div>
          </div>

          <div>
            <img src="./assets/img/image 2.png" alt=""><br>

            <div class="flex flex-col justify-center gap-4">
              <h1 class="text-customRed text-[12px]">New Burger</h1>
              <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
              <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

              <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
            </div>
          </div>

          <div>
            <img src="./assets/img/image 2.png" alt=""><br>

            <div class="flex flex-col justify-center gap-4">
              <h1 class="text-customRed text-[12px]">New Burger</h1>
              <p class="text-[12px]">Lorem ipsum dolor sit amet consectetur. <br>
                Volutpat ultrices eget sed nisl blandit <br> libero et viverra.</p>
              <p class="text-[12px]">Brand: Defacto | Similar products from Defacto</p>

              <p class="bg-black text-white w-[80px] h-[28px] text-center p-[3px]">In Stock</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section>
      <div class="flex flex-wrap justify-center gap-[80px]  items-center">
        <div>
          <img src="./assets/img/image 7.png" alt="">
        </div>

        <div>
          <img src="./assets/img/image 6.png" alt="">
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col justify-center items-center gap-[90px]">
        <div>
          <img src="./assets/img/Frame 16.png" alt="">
        </div>

        <div class="flex flex-wrap justify-center gap-[170px]">
          <div class="">
            <img src="./assets/img/Rectangle 1.png" alt="">
            <p>ZEBRONICS Zeb-Reaper <br> 2.4GHz Wireless Gaming <br> Mouse</p>
            <span class="flex gap-[95px]">
              <p>₹1,599.00</p>
              <p class="text-customRed">-40% off</p>
            </span>
          </div>

          <div class="">
            <img src="./assets/img/Rectangle 1 (1).png" alt="">
            <p>Zebronics Zeb-Transformer- <br>k USB Gaming Keyboard | <br> RGB LED lighting</p>
            <span class="flex gap-[95px]">
              <p>₹999.00</p>
              <p class="text-customRed">-36% off</p>
            </span>
          </div>

          <div class="">
            <img src="./assets/img/Rectangle 1 (2).png" alt="">
            <p>TP-Link Powered USB Hub <br> with 7 Data Smart Charging <br> hub</p>
            <span class="flex gap-[95px]">
              <p>₹1,999.00</p>
              <p class="text-customRed">-36% off</p>
            </span>
          </div>

          <div class="">
            <img src="./assets/img/Rectangle 1 (3).png" alt="">
            <p>Scarters Mouse Pad,<br> Deskmat Extended for Work <br> from Home/Office/Gaming</p>
            <span class="flex gap-[95px]">
              <p>₹1,599.00</p>
              <p class="text-customRed">-30% off</p>
            </span>
          </div>

          <div class="">
            <img src="./assets/img/Rectangle 1 (4).png" alt="">
            <p>HyperX Streamer Starter <br> Pack (HBNDL0001), Black</p>
            <span class="flex gap-[95px]">
              <p>₹1,599.00</p>
              <p class="text-customRed">-26% off</p>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="flex flex-col gap-[36px]">
        <div>
          <img src="./assets/img/Frame 38.png" alt="">
        </div>
        <div class="flex flex-wrap justify-center gap-[88px]">
          <img src="./assets/img/img2/Rectangle 1.png" alt="">
          <img src="./assets/img/Rectangle 1 (5).png" alt="">
          <img src="./assets/img/Rectangle 1 (6).png" alt="">
          <img src="./assets/img/Rectangle 1 (8).png" alt="">
          <img src="./assets/img/Component 6.png" alt="">
          <img src="./assets/img/Component_8-removebg-preview.png" alt="">
        </div>

      </div>
    </section>

    <section>
      <div class="flex flex-col justify-center items-center text-center gap-[56px]">
        <div class="flex flex-col gap-[24px]">
          <h1 class="text-[40px] text-Customgray"><b>Who uses Shopacart?</b></h1>
          <p class="text-[18px] text-customGraybesh">Big brands, small bussiness, new startuo and inividuals</p>
        </div>
        <div class="flex flex-wrap justify-center gap-[90px]">
          <img src="./assets/img/Logo.png" alt="">
          <img src="./assets/img/path2.png" alt="">
          <img src="./assets/img/Logo (1).png" alt="">
          <img src="./assets/img/Logo (2).png" alt="">
          <img src="./assets/img/Logo (3).png" alt="">
          <img src="./assets/img/Logo (4).png" alt="">
        </div>
      </div>
    </section>

    <footer>
      <div class="bg-customRed text-white flex flex-col h-[200px] md:flex-row justify-between items-center p-4">
        <div class="text-center md:text-left">
          <h1 class="text-[24px] md:text-[32px]"><b>shopa</b>cart</h1>
        </div>

        <ul class="flex flex-wrap justify-center md:justify-around gap-[20px] text-[14px] md:text-[16px]">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Products</a></li>
          <li><a href="#" class="hover:underline">Categories</a></li>
          <li><a href="#" class="hover:underline">About us</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
          <li><a href="#" class="hover:underline">Help</a></li>
        </ul>
      </div>
    </footer>

  </div>
</template>

<style scoped>

</style>