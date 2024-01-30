const itemList = [
    {
        id: 1,
        level: 1,
        img: ["wheat.png", "egg.png"],
        name: ["ข้าวสาลี", "ไข่"]
    },
    {
        id: 2,
        level: 2,
        img: ["corn.png", "bread.png"],
        name: ["ข้าวโพด", "ขนมปัง"]
    },
    {
        id: 3,
        level: 3,
        img: ["chicken_feed.png"],
        name: ["อาหารไก่"]
    },
    {
        id: 4,
        level: 5,
        img: ["soybean.png"],
        name: ["ถั่วเหลือง"]
    },
    {
        id: 5,
        level: 6,
        img: ["cow_feed.png", "milk.png", "cream.png"],
        name: ["อาหารวัว", "นมวัว", "ครีม"]
    },
    {
        id: 6,
        level: 7,
        img: ["sugarcane.png", "corn_bread.png", "brown_sugar.png"],
        name: ["อ้อย", "ขนมปังข้าวโพด", "น้ำตาลทราย"]
    },
    {
        id: 7,
        level: 8,
        img: ["popcorn.png"],
        name: ["ป๊อปคอร์น"]
    },
    {
        id: 8,
        level: 9,
        img: ["carrot.png", "butter.png", "pancake.png"],
        name: ["แครอท", "เนย", "แพรเค้ก"]
    },
    {
        id: 9,
        level: 10,
        img: ["pig_feed.png", "bacon.png", "cookie.png"],
        name: ["อาหารหมู", "เบคอน", "คุกกี้"]
    },
    {
        id: 10,
        level: 11,
        img: ["bacon_and_eggs.png"],
        name: ["เบคอนและไข่"]
    },
    {
        id: 11,
        level: 12,
        img: ["cheese.png"],
        name: ["ชีส"]
    },
    {
        id: 12,
        level: 13,
        img: ["indigo.png", "white_sugar.png"],
        name: ["คราม", "น้ำตาลทรายขาว"]
    },
    {
        id: 13,
        level: 14,
        img: ["carrot_pie.png"],
        name: ["พายแครอท"]
    },
    {
        id: 14,
        level: 15,
        img: ["pumpkin.png", "pumpkin_pie.png", "apple.png"],
        name: ["ฟักทอง", "พายฟักทอง", "แอปเปิล"]
    },
    {
        id: 15,
        level: 16,
        img: ["sheep_feed.png", "wool.png", "buttered_popcorn.png"],
        name: ["อาหารแกะ", "ขนแกะ", "ข้าวโพดคั่วทาเนย"]
    },
    {
        id: 16,
        level: 17,
        img: ["sweater.png"],
        name: ["สเวตเตอร์"]
    },
    {
        id: 17,
        level: 18,
        img: ["cotton.png", "bacon_pie.png", "syrup.png", "cotton_fabric.png", "hamburger.png"],
        name: ["ผ้าย", "พายเบคอน", "น้ำเชื่อม", "ผ้าฝ้าย", "แฮมเบอร์เกอร์"]
    },
    {
        id: 18,
        level: 19,
        img: ["blue_woolly_hat.png", "cotton_shirt.png"],
        name: ["หมวกขนสัตว์สีน้ําเงิน", "เสื้อเชิ้ตผ้าฝ้าย"]
    },
    {
        id: 19,
        level: 20,
        img: ["blue_sweater.png"],
        name: ["เสื้อสีน้ําเงิน"]
    },
    {
        id: 20,
        level: 21,
        img: ["carrot_cake.png", "wooly_chaps.png"],
        name: ["เค้กแครอท", "กางเกงปุกปุย"]
    },
    {
        id: 21,
        level: 22,
        img: ["cherry.png"],
        name: ["เชอร์รี่"]
    },
    {
        id: 22,
        level: 23,
        img: ["cream_cake.png", "red_berry_cake.png"],
        name: ["เค้กครีม", "เค้กเบอร์รี่สีแดง"]
    },
    {
        id: 23,
        level: 24,
        img: ["cheesecake.png", "silver_ore.png", "gold_ore.png", "platinum_ore.png", "silver_bar.png"],
        name: ["ชีสเค้ก", "แร่เงิน", "แร่ทองคํา", "แร่แพลตตินั่ม", "แท่งเงิน"]
    },
    {
        id: 24,
        level: 25,
        img: ["chili_pepper.png", "chili_popcorn.png", "gold_bar.png", "platinum_bar.png", "violet_dress.png"],
        name: ["พริก", "พริกป๊อปคอร์น", "ทองคําแท่ง", "แพลทินัมบาร์", "ชุดสีม่วง"]
    },
    {
        id: 25,
        level: 26,
        img: ["blackberry.png", "blackberry_muffin.png", "carrot_juice.png"],
        name: ["แบล็กเบอร์รี่", "มัฟฟินแบล็กเบอร์รี่", "น้ําแครอท"]
    },
    {
        id: 26,
        level: 27,
        img: ["fish_fillet.png", "fish_burger.png"],
        name: ["เนื้อปลา", "เบอร์เกอร์ปลา"]
    },
    {
        id: 27,
        level: 28,
        img: ["apple_pie.png", "fish_pie.png", "apple_juice.png"],
        name: ["พายแอปเปิ้ล", "พายปลา", "น้ําแอปเปิ้ล"]
    },
    {
        id: 28,
        level: 29,
        img: ["vanilla_ice_cream.png"],
        name: ["ไอศกรีมวานิลลา"]
    },
    {
        id: 29,
        level: 30,
        img: ["tomato.png", "roasted_tomatoes.png", "cherry_juice.png"],
        name: ["มะเขือเทศ", "มะเขือเทศย่าง", "น้ําเชอร์รี่"]
    },
    {
        id: 30,
        level: 31.,
        img: ["tomato_juice.png", "berry_juice.png"],
        name: ["น้ํามะเขือเทศ", "น้ําเบอร์รี่"]
    },
    {
        id: 31,
        level: 32,
        img: ["goat_feed.png", "goat_milk.png"],
        name: ["อาหารแพะ", "นมแพะ"]
    },
    {
        id: 32,
        level: 33,
        img: ["goat_cheese.png", "pizza.png", "coal.png", "refined_coal.png", "cherry_popsicle.png"],
        name: ["ชีสแพะ", "พิซซ่า", "ถ่านหิน", "ถ่านหินกลั่น", "ไอติมเชอร์รี่"]
    },
    {
        id: 33,
        level: 34,
        img: ["strawberry.png", "feta_pie.png", "iron_ore.png", "iron_bar.png", "strawberry_ice_cream.png", "wheat_bundle.png", "meat_bucket.png"],
        name: ["สตรอว์เบอร์รี่", "เฟต้าพาย", "แร่เหล็ก", "เหล็กเส้น", "ไอศกรีมสตรอว์เบอร์รี่", "มัดข้าวสาลี", "ถังเนื้อ"]
    },
    {
        id: 34,
        level: 35,
        img: ["potato.png", "strawberry_cake.png", "baked_potato.png", "apple_jam.png"],
        name: ["มันฝรั่ง", "เค้กสตรอเบอร์รี่", "มันฝรั่งอบ", "แยมแอปเปิ้ล"]
    },
    {
        id: 35,
        level: 36,
        img: ["Chocolate_cake.png", "Casserole.png", "Cacao.png", "Raspberry_jam.png"],
        name: ["เค้กช็อคโกแลต", "หม้อตุ๋น", "โกโก้", "แยมราสเบอร์รี่"]
    },
    {
        id: 36,
        level: 37,
        img: ["Spicy_pizza.png", "Blackberry_jam.png"],
        name: ["พิซซ่ารสเผ็ด", "แยมแบล็กเบอร์รี่"]
    },
    {
        id: 37,
        level: 38,
        img: ["Potato_feta_cake.png", "Cherry_jam.png", "Bracelet.png"],
        name: ["เค้กเฟต้ามันฝรั่ง", "แยมเชอร์รี่", "วลัย"]
    },
    {
        id: 38,
        level: 39,
        img: ["Potato_bread.png", "Shepherds_pie.png", "Chocolate_ice_cream.png", "Honeycomb.png", "Necklace.png", "Honey.png"],
        name: ["ขนมปังมันฝรั่ง", "พายของคนเลี้ยงแกะ", "ไอศกรีมช็อกโกแลต", "รังผึ้ง", "สร้อยคอ", "น้ำผึ้ง"]
    },
    {
        id: 39,
        level: 40,
        img: ["Honey_popcorn.png", "Diamond_ring.png"],
        name: ["ข้าวโพดคั่วน้ําผึ้ง", "แหวนเพชร"]
    },
    {
        id: 40,
        level: 41,
        img: ["Fish_and_chips.png", "Iron_bracelet.png"],
        name: ["ฟิชแอนด์ชิปส์", "สร้อยข้อมือเหล็ก"]
    },
    {
        id: 41,
        level: 42,
        img: ["Coffee_bean.png", "Espresso.png", "Honey_apple_cake.png"],
        name: ["เมล็ดกาแฟ", "เอสเพรสโซ่", "เค้กแอปเปิ้ลน้ําผึ้ง"]
    },
    {
        id: 42,
        level: 43,
        img: ["Caffe_latte.png"],
        name: ["กาแฟกับนม",]
    },
    {
        id: 43,
        level: 44,
        img: ["Chocolate_popcorn.png", "Lobster_tail.png"],
        name: ["ป๊อปคอร์นช็อกโกแลต", "หางกุ้งก้ามกราม"]
    },
    {
        id: 44,
        level: 45,
        img: ["Frutti_di_Mare_pizza.png", "Caffe_mocha.png"],
        name: ["พิซซ่า Frutti di Mare", "กาแฟมอคค่า"]
    },
    {
        id: 45,
        level: 46,
        img: ["Raspberry_mocha.png", "Lobster_soup.png"],
        name: ["ราสเบอร์รี่มอคค่า", "ซุปกุ้งก้ามกราม"]
    },
    {
        id: 46,
        level: 47,
        img: ["Hot_chocolate.png", "Tomato_soup.png"],
        name: ["ช็อคโกแลตร้อน", "ซุปมะเขือเทศ"]
    },
    {
        id: 47,
        level: 48,
        img: ["Red_scarf.png", "Lobster_skewer.png", "Beeswax.png", "Strawberry_candle.png"],
        name: ["ผ้าพันคอสีแดง", "กุ้งก้ามกรามเสียบไม้", "ขี้ผึ้ง", "เทียนสตรอเบอร์รี่"]
    },
    {
        id: 48,
        level: 49,
        img: ["Rustic_bouquet.png", "Pumpkin_soup.png", "Asparagus.png", "Asparagus_quiche.png"],
        name: ["ช่อดอกไม้ชนบท", "ซุปฟักทอง", "หน่อไม้ฝรั่ง", "คีชหน่อไม้ฝรั่ง"]
    },
    {
        id: 49,
        level: 50,
        img: ["Strawberry_jam.png", "Duck_feather.png", "Sesame.png", "Sesame_ice_cream.png"],
        name: ["แยมสตรอเบอร์รี่", "ขนเป็ด", "งา", "ไอศกรีมงา"]
    },
    {
        id: 50,
        level: 51,
        img: ["Caramel_apple.png", "Pillow.png", "Asparagus_soup.png"],
        name: ["แอปเปิ้ลคาราเมล", "หมอน", "ซุปหน่อไม้ฝรั่ง"]
    },
    {
        id: 51,
        level: 52,
        img: ["Toffee.png", "Raspberry_candle.png", "Pineapple.png", "Pineapple_juice.png"],
        name: ["ลูกกวาด", "เทียนราสเบอร์รี่", "สับปะรด", "น้ําสับปะรด"]
    },
    {
        id: 52,
        level: 53,
        img: ["Fish_soup.png", "Lily.png"],
        name: ["ซุปปลา", "ลิลลี่"]
    },
    {
        id: 53,
        level: 54,
        img: ["Soy_sauce.png", "Chocolate.png", "Fancy_cake.png"],
        name: ["ซอสถั่วเหลือง", "ช็อกโกแลต", "เค้กแฟนซี"]
    },
    {
        id: 54,
        level: 56,
        img: ["Rice.png", "Sushi_roll.png"],
        name: ["ข้าว", "ซูชิโรล"]
    },
    {
        id: 55,
        level: 57,
        img: ["Olive.png", "Lollipop.png"],
        name: ["มะกอก", "อมยิ้ม"]
    },
    {
        id: 56,
        level: 58,
        img: ["Lettuce.png", "Feta_salad.png"],
        name: ["ผักกาดหอม", "สลัดเฟต้า"]
    },
    {
        id: 57,
        level: 59,
        img: ["Lobster_sushi.png", "Blanket.png"],
        name: ["ซูชิกุ้งมังกร", "ผ้าห่ม"]
    },
    {
        id: 58,
        level: 60,
        img: ["Jelly_beans.png", "Olive_oil.png", "Garlic.png", "Garlic_bread.png"],
        name: ["ถั่วเยลลี่", "น้ํามันมะกอก", "กระเทียม", "ขนมปังกระเทียม"]
    },
    {
        id: 59,
        level: 61,
        img: ["Veggie_bagel.png"],
        name: ["เบเกิลผัก"]
    },
    {
        id: 60,
        level: 62,
        img: ["Mayonnaise.png", "BLT_salad.png", "Caramel_latte.png", "Peanuts.png"],
        name: ["มายองเนส", "สลัด BLT", "คาราเมลลาเต้", "ถั่วลิสง"]
    },
    {
        id: 61,
        level: 63,
        img: ["Sunflower.png", "Egg_sushi.png", "Honey_peanuts.png"],
        name: ["ทานตะวัน", "ซูชิไข่", "ถั่วลิสงน้ําผึ้ง"]
    },
    {
        id: 62,
        level: 64,
        img: ["Seafood_salad.png", "Berry_smoothie.png", "Snack_mix.png"],
        name: ["สลัดทะเล", "เบอร์รี่ปั่น", "ขนมขบเคี้ยวผสม"]
    },
    {
        id: 63,
        level: 65,
        img: ["Bright_bouquet.png", "Bacon_toast.png", "Pineapple_cake.png", "Chocolate_pie.png", "Cabbage.png", "Cabbage_soup.png"],
        name: ["ช่อดอกไม้สดใส", "ขนมปังปิ้งเบคอน", "เค้กสับปะรด", "พายช็อคโกแลต", "กะหล่ำปลี", "ซุปกะหล่ําปลี"]
    },
    {
        id: 64,
        level: 66,
        img: ["Lemon.png", "Lemon_curd.png", "Olive_dip.png", "Egg_sandwich.png", "Egg_sandwich.png", "Green_smoothie.png"],
        name: ["มะนาว", "เต้าหู้มะนาว", "น้ําจิ้มมะกอก", "แซนวิชไข่", "กรีนสมูทตี้"]
    },
    {
        id: 65,
        level: 67,
        img: ["Fresh_pasta.png", "Pasta_salad.png", "Lemon_pie.png", "Grilled_asparagus.png"],
        name: ["พาสต้าสด", "สลัดพาสต้า", "พายมะนาว", "หน่อไม้ฝรั่งย่าง"]
    },
    {
        id: 66,
        level: 68,
        img: ["Onion.png", "Grilled_onion.png", "Lemon_cake.png", "Peanut_butter_milkshake.png"],
        name: ["หัวหอม", "หัวหอมย่าง", "เค้กมะนาว", "มิลค์เชคเนยถั่ว"]
    },
    {
        id: 67,
        level: 69,
        img: ["Tomato_sauce.png", "Honey_toast.png", "Fried_rice.png"],
        name: ["ซอสมะเขือเทศ", "ฮันนี่โทสต์", "ข้าวผัด"]
    },
    {
        id: 68,
        level: 70,
        img: ["Yogurt_smoothie.png", "Cloche_hat.png", "Cucumber.png", "Cucumber_smoothie.png"],
        name: ["โยเกิร์ตปั่น", "หมวก Cloche", "แตงกวา", "แตงกวาปั่น"]
    },
    {
        id: 69,
        level: 71,
        img: ["Orange.png", "Flower_shawl.png", "Orange_juice.png", "Peanut_butter_and_jelly_sandwich.png"],
        name: ["ส้ม", "ผ้าคลุมไหล่ลายดอกไม้", "น้ําส้ม", "แซนวิชเนยถั่วและเยลลี่"]
    },
    {
        id: 70,
        level: 72,
        img: ["Onion_soup.png", "Lemon_candle.png", "Top_hat.png", "Gnocchi.png", "Beetroot.png", "Winter_veggies.png"],
        name: ["ซุปหัวหอม", "เทียนมะนาว", "หมวกทรงสูง", "ญ็อกกี", "หัวผักกาดหวาน", "ผักเมืองหนาว"]
    },
    {
        id: 71,
        level: 73,
        img: ["Rice_noodles.png", "Noodle_soup.png", "Gracious_bouquet.png"],
        name: ["ก๋วยเตี๋ยวข้าว", "ก๋วยเตี๋ยว", "ช่อดอกไม้ที่สง่างาม"]
    },
    {
        id: 72,
        level: 74,
        img: ["Bell_pepper.png", "Marmalade.png", "Sun_hat.png", "Veggie_lasagna.png", "Veggie_platter.png"],
        name: ["พริกหยวก", "แยมผิวส้ม", "หมวกกันแดด", "ลาซานญ่าผัก", "จานผัก"]
    },
    {
        id: 73,
        level: 75,
        img: ["Hot_dog.png", "Coleslaw.png", "Cotton_Candy.png"],
        name: ["ฮอทดอก", "โคลสลอว์", "สายไหม"]
    },
    {
        id: 74,
        level: 76,
        img: ["Peach.png", "Peach_tart.png", "Tofu_dog.png", "Big_sushi_roll.png", "Beetroot_salad.png", "Plain_Donut.png"],
        name: ["พีช", "ทาร์ตพีช", "สุนัขเต้าหู้", "ซูชิโรลใหญ่", "สลัดบีทรูท", "โดนัทธรรมดา"]
    },
    {
        id: 75,
        level: 77,
        img: ["Salsa.png", "Taco.png", "Colourful_omelet.png", "Spring_omelet.png"],
        name: ["ซัลซ่า", "ทาโก้", "ไข่เจียวหลากสี", "ไข่เจียวฤดูใบไม้ผลิ"]
    },
    {
        id: 76,
        level: 78,
        img: ["Summer_rolls.png", "Orange_sorbet.png", "Corn_dog.png", "Potato_soup.png", "Ginger.png", "Sesame_brittle.png", "Affogato.png"],
        name: ["ซัมเมอร์โรล", "เชอร์เบทส้ม", "คอร์นด็อก", "ซุปมันฝรั่ง", "ขิง", "งาเปราะ", "อัฟโฟกาโต"]
    },
    {
        id: 77,
        level: 79,
        img: ["Fish_taco.png", "Peach_jam.png", "Lobster_pasta.png", "Cucumber_sandwich.png", "Spicy_fish.png", "Sprinkled_Donut.png", "Cheese_omelet.png"],
        name: ["ทาโก้ปลา", "แยมพีช", "พาสต้ากุ้งมังกร", "แซนวิชแตงกวา", "ปลารสเผ็ด", "โดนัทโรย", "ไข่เจียวชีส"]
    },
    {
        id: 78,
        level: 80,
        img: ["Tea_leaf.png", "Green_tea.png", "Onion_dog.png", "Stuffed_peppers.png"],
        name: ["ใบชา", "ชาเขียว", "สุนัขหัวหอม", "พริกยัดไส้"]
    },
    {
        id: 79,
        level: 81,
        img: ["Milk_tea.png", "Bell_pepper_soup.png", "Chocolate_fondue.png"],
        name: ["ชานม", "ซุปพริกหยวก", "ช็อกโกแลตฟองดู"]
    },
    {
        id: 80,
        level: 82,
        img: ["Peony.png", "Quesadilla.png", "Fruit_salad.png", "Crunchy_Donut.png"],
        name: ["โบตั๋น", "Quesadilla", "สลัดผลไม้", "โดนัทกรุบกรอบ"]
    },
    {
        id: 81,
        level: 83,
        img: ["Pasta_carbonara.png", "Peach_ice_cream.png", "Honey_tea.png", "Broccoli.png", "Broccoli_pasta.png", "Rice_omelet.png"],
        name: ["พาสต้าคาโบนาร่า", "ไอศกรีมพีช", "ชาน้ําผึ้ง", "บรอกโคลี", "พาสต้าบร็อคโคลี่", "ข้าวไข่เจียว"]
    },
    {
        id: 82,
        level: 84,
        img: ["Summer_salad.png", "Grapes.png", "Grape_juice.png", "Onion_melt.png", "Honey_soap.png", "Lemon_lotion.png", "Colorful_Candles.png"],
        name: ["สลัดฤดูร้อน", "องุ่น", "น้ําองุ่น", "หัวหอมละลาย", "สบู่น้ําผึ้ง", "โลชั่นมะนาว", "เทียนหลากสี"]
    },
    {
        id: 83,
        level: 85,
        img: ["Mint.png", "Grape_jam.png", "Mint_ice_cream.png"],
        name: ["โรงกษาปณ์", "แยมองุ่น", "ไอศกรีมมิ้นท์"]
    },
    {
        id: 84,
        level: 86,
        img: ["Flower_crown.png", "Lemon_tea.png", "Bacon_fondue.png", "Peanut_noodles.png", "Gingerbread_cookie.png", "Cream_Donut.png"],
        name: ["มงกุฎดอกไม้", "ชามะนาว", "เบคอนฟองดู", "บะหมี่ถั่วลิสง", "คุกกี้ขนมปังขิง", "ครีมโดนัท"]
    },
    {
        id: 85,
        level: 87,
        img: ["Nachos.png", "Spicy_pasta.png", "Broccoli_soup.png", "Bacon_fries.png", "Potato_Omelet.png"],
        name: ["นาโชส", "พาสต้ารสเผ็ด", "ซุปบร็อคโคลี่", "เบคอนทอด", "ไข่เจียวมันฝรั่ง"]
    },
    {
        id: 86,
        level: 88,
        img: ["Mixed_smoothie.png", "Banana.png", "Iced_banana_latte.png", "Apple_ginger_tea.png", "Bacon_Donut.png", "Passion_fruit.png", "Passion_fruit_juice.png"],
        name: ["สมูทตี้ผสม", "กล้วย", "ลาเต้กล้วยเย็น", "ชาขิงแอปเปิ้ล", "เบคอนโดนัท", "เสาวรส", "น้ําเสาวรส"]
    },
    {
        id: 87,
        level: 89,
        img: ["Orange_tea.png", "Fruit_cake.png", "Mushroom.png", "Mushroom_salad.png", "Tofu_stir_fry.png"],
        name: ["ชาส้ม", "เค้กผลไม้", "เห็ด", "สลัดเห็ด", "ผัดเต้าหู้"]
    },
    {
        id: 88,
        level: 90,
        img: ["Candy_bouquet.png", "Eggplant.png", "Grilled_eggplant.png"],
        name: ["ช่อดอกไม้", "มะเขือ", "มะเขือยาวย่าง"]
    },
    {
        id: 89,
        level: 91,
        img: ["Banana_bread.png", "Cheese_fondue.png", "Hand_pies.png", "Pickles.png"],
        name: ["ขนมปังกล้วยหอม", "ฟองดูชีส", "พายมือ", "ดอง"]
    },
    {
        id: 90,
        level: 92,
        img: ["Watermelon.png", "Iced_tea.png", "Goat_cheese_toast.png", "Watermelon_juice.png", "Birthday_Bouquet.png", "Passion_fruit_pie.png"],
        name: ["แตงโม", "ชาเย็น", "ขนมปังปิ้งชีสแพะ", "น้ําแตงโม", "ช่อดอกไม้วันเกิด", "พายเสาวรส"]
    },
    {
        id: 91,
        level: 93,
        img: ["Soft_bouquet.png", "Black_sesame_smoothie.png", "Exfoliating_soap.png", "Filled_Donut.png"],
        name: ["ช่อดอกไม้นุ่ม", "สมูทตี้งาดํา", "สบู่ขัดผิว", "โดนัทสอดไส้"]
    },
    {
        id: 92,
        level: 94,
        img: ["Plum.png", "Banana_pancakes.png", "Plum_jam.png", "Clay.png", "Tea_pot.png"],
        name: ["พลัม", "แพนเค้กกล้วยหอม", "แยมพลัม", "ดินเหนียว", "กาน้ําชา"]
    },
    {
        id: 93,
        level: 95,
        img: ["Floral_candle.png", "Chocolate_roll.png", "Canned_fish.png", "Chickpea.png", "Hummus.png"],
        name: ["เทียนดอกไม้", "ช็อกโกแลตโรล", "ปลากระป๋อง", "ถั่วชิกพี", "ฮัมมัส"]
    },
    {
        id: 94,
        level: 96,
        img: ["Banana_split.png", "Fish_skewer.png", "Passion_fruit_jam.png", "Potted_plant.png"],
        name: ["กล้วยแยก", "ปลาเสียบไม้", "แยมเสาวรส", "ไม้กระถาง"]
    },
    {
        id: 95,
        level: 97,
        img: ["Mint_tea.png", "Mushroom_pot_pie.png", "Mango.png", "Mango_juice.png"],
        name: ["ชามินต์", "พายหม้อเห็ด", "มะม่วง", "น้ํามะม่วง"]
    },
    {
        id: 96,
        level: 98,
        img: ["Flower_pendant.png", "Chili_poppers.png", "Falafel.png", "Kimchi.png"],
        name: ["จี้ดอกไม้", "พริกป่น", "ฟาลาเฟล", "กิมจิ"]
    },
    {
        id: 97,
        level: 99,
        img: ["Eggplant_parmesan.png", "Honey_face_mask.png", "Clay_mug.png", "Rich_fudge.png"],
        name: ["มะเขือยาวพาเมซาน", "มาส์กหน้าน้ําผึ้ง", "แก้วดินเผา", "ฟัดจ์เข้มข้น"]
    },
    {
        id: 98,
        level: 100,
        img: ["Cocoa_smoothie.png", "Fried_candy_bar.png", "Tart_dressing.png", "Tropical_fondue.png"],
        name: ["โกโก้ปั่น", "ลูกกวาดทอด", "น้ําสลัดทาร์ต", "ฟองดูเขตร้อน"]
    },
    {
        id: 99,
        level: 101,
        img: ["Mushroom_pasta.png", "Coconut.png", "Macaroon.png"],
        name: ["พาสต้าเห็ด", "มะพร้าว", "มาการอง"]
    },
    {
        id: 100,
        level: 102,
        img: ["Plum_smoothie.png", "Dried_fruit.png", "Mint_fudge.png", "Coconut_ice_cream.png"],
        name: ["สมูทตี้บ๊วย", "ผลไม้อบแห้ง", "มิ้นท์ฟัดจ์", "ไอศกรีมมะพร้าว"]
    },
    {
        id: 101,
        level: 103,
        img: ["Samosa.png", "Plain_yogurt.png"],
        name: ["ซาโมซ่า", "โยเกิร์ตธรรมดา"]
    },
    {
        id: 102,
        level: 104,
        img: ["Mushroom_soup.png", "Chili_fudge.png", "Tropical_smoothie.png", "Guava.png", "Guava_juice.png", "Guava_compote.png"],
        name: ["ซุปเห็ด", "พริกฟัดจ์", "ทรอปิคอลสมูทตี้", "ฝรั่ง", "น้ําฝรั่ง", "ผลไม้แช่อิ่มฝรั่ง"]
    },
    {
        id: 103,
        level: 105,
        img: ["Strawberry_yogurt.png"],
        name: ["โยเกิร์ตสตรอเบอร์รี่"]
    },
    {
        id: 104,
        level: 106,
        img: ["Veggie_bouquet.png", "Chickpea_stew.png", "Fruit_sorbet.png"],
        name: ["ช่อผัก", "สตูว์ถั่วชิกพี", "เชอร์เบทผลไม้"]
    },
    {
        id: 105,
        level: 107,
        img: ["Pomegranate.png", "Pomegranate_tea.png"],
        name: ["ทับทิม", "ชาทับทิม"]
    },
    {
        id: 106,
        level: 108,
        img: ["Lemon_fudge.png", "Pomegranate_cake.png"],
        name: ["เลมอนฟัดจ์", "เค้กทับทิม"]
    },
    {
        id: 107,
        level: 109,
        img: ["Hummus_wrap.png", "Tropical_yogurt.png", "Chili_stew.png", "Plain_cupcake.png", "Guava_cupcake.png"],
        name: ["ห่อฮัมมุส", "ทรอปิคอลโยเกิร์ต", "สตูว์พริก", "คัพเค้กธรรมดา", "คัพเค้กฝรั่ง"]
    },
    {
        id: 108,
        level: 110,
        img: ["Rice_ball.png"],
        name: ["ข้าวปั้น"]
    },
    {
        id: 109,
        level: 111,
        img: ["Peanut_fudge.png"],
        name: ["ฟัดจ์ถั่วลิสง"]
    },
    {
        id: 110,
        level: 112,
        img: ["Tropical_cupcake.png", "Winter_stew.png"],
        name: ["คัพเค้กเขตร้อน", "สตูว์ฤดูหนาว"]
    },
    {
        id: 111,
        level: 114,
        img: ["Cookie_cupcake.png", "Plain_waffles.png", "Berry_waffles.png", "xxxxx.png"],
        name: ["คัพเค้กคุกกี้", "วาฟเฟิลธรรมดา", "วาฟเฟิลเบอร์รี่"]
    },
    {
        id: 112,
        level: 117,
        img: ["Orange_salad.png", "Chocolate_waffles.png"],
        name: ["สลัดส้ม", "วาฟเฟิลช็อกโกแลต"]
    },
    {
        id: 113,
        level: 119,
        img: ["Breakfast_waffles.png", "Oats.png", "Breakfast_bowl.png", "Apple_porridge.png"],
        name: ["วาฟเฟิลอาหารเช้า", "ข้าวโอ๊ต", "ชามอาหารเช้า", "โจ๊กแอปเปิ้ล"]
    },
    {
        id: 114,
        level: 120,
        img: ["Pineapple_coconut_bars.png", "Sweet_porridge.png"],
        name: ["มะพร้าวสับปะรดแท่ง", "โจ๊กหวาน"]
    },
    {
        id: 115,
        level: 121,
        img: ["Rich_soap.png"],
        name: ["สบู่เข้มข้น"]
    },
    {
        id: 116,
        level: 122,
        img: ["Fresh_porridge.png"],
        name: ["โจ๊กสด"]
    },
    {
        id: 117,
        level: 124,
        img: ["Vanilla_milkshake.png"],
        name: ["วานิลลามิลค์เชค"]
    },
    {
        id: 118,
        level: 125,
        img: ["Mocha_milkshake.png"],
        name: ["มอคค่ามิลค์เชค"]
    },
    {
        id: 119,
        level: 126,
        img: ["Fruity_milkshake.png"],
        name: ["ฟรุ๊ตตี้มิลค์เชค"]
    },
];


