const itemList = [{ id: 1, level: 1, img: 'Wheat.png', name: 'ข้าวสาลี' }
,
{ id: 2, level: 1, img: 'Egg.png', name: 'ไข่' }
,
{ id: 3, level: 2, img: 'Corn.png', name: 'ข้าวโพด' }
,
{ id: 4, level: 2, img: 'Bread.png', name: 'ขนมปัง' }
,
{ id: 5, level: 3, img: 'Chicken_feed.png', name: 'อาหารไก่' }
,
{ id: 6, level: 5, img: 'Soybean.png', name: 'ถั่วเหลือง' }
,
{ id: 7, level: 6, img: 'Cow_feed.png', name: 'อาหารวัว' }
,
{ id: 8, level: 6, img: 'Milk.png', name: 'นมวัว' }
,
{ id: 9, level: 6, img: 'Cream.png', name: 'ครีม' }
,
{ id: 10, level: 7, img: 'Sugarcane.png', name: 'อ้อย' }
,
{ id: 11, level: 7, img: 'Corn_bread.png', name: 'ขนมปังข้าวโพด' }
,
{ id: 12, level: 7, img: 'Brown_sugar.png', name: 'น้ำตาลทราย' }
,
{ id: 13, level: 8, img: 'Popcorn.png', name: 'ป๊อปคอร์น' }
,
{ id: 14, level: 9, img: 'Carrot.png', name: 'แครอท' }
,
{ id: 15, level: 9, img: 'Butter.png', name: 'เนย' }
,
{ id: 16, level: 9, img: 'Pancake.png', name: 'แพรเค้ก' }
,
{ id: 17, level: 10, img: 'Pig_feed.png', name: 'อาหารหมู' }
,
{ id: 18, level: 10, img: 'Bacon.png', name: 'เบคอน' }
,
{ id: 19, level: 10, img: 'Cookie.png', name: 'คุกกี้' }
,
{ id: 20, level: 11, img: 'Bacon_and_eggs.png', name: 'เบคอนและไข่' }
,
{ id: 21, level: 12, img: 'Cheese.png', name: 'ชีส' }
,
{ id: 22, level: 13, img: 'Indigo.png', name: 'คราม' }
,
{ id: 23, level: 13, img: 'White_sugar.png', name: 'น้ำตาลทรายขาว' }
,
{ id: 24, level: 14, img: 'Carrot_pie.png', name: 'พายแครอท' }
,
{ id: 25, level: 15, img: 'Pumpkin.png', name: 'ฟักทอง' }
,
{ id: 26, level: 15, img: 'Pumpkin_pie.png', name: 'พายฟักทอง' }
,
{ id: 27, level: 15, img: 'Apple.png', name: 'แอปเปิล' }
,
{ id: 28, level: 16, img: 'Sheep_feed.png', name: 'อาหารแกะ' }
,
{ id: 29, level: 16, img: 'Wool.png', name: 'ขนแกะ' }
,
{
  id: 30,
  level: 16,
  img: 'Buttered_popcorn.png',
  name: 'ข้าวโพดคั่วทาเนย'
}
,
{ id: 31, level: 16, img: 'Sheep_feed.png', name: 'อาหารแกะ' }
,
{ id: 32, level: 16, img: 'Wool.png', name: 'ขนแกะ' }
,
{
  id: 33,
  level: 16,
  img: 'Buttered_popcorn.png',
  name: 'ข้าวโพดคั่วทาเนย'
}
,
{ id: 34, level: 17, img: 'Sweater.png', name: 'สเวตเตอร์' }
,
{ id: 35, level: 18, img: 'Cotton.png', name: 'ผ้าย' }
,
{ id: 36, level: 18, img: 'Bacon_pie.png', name: 'พายเบคอน' }
,
{ id: 37, level: 18, img: 'Syrup.png', name: 'น้ำเชื่อม' }
,
{ id: 38, level: 18, img: 'Cotton_fabric.png', name: 'ผ้าฝ้าย' }
,
{ id: 39, level: 18, img: 'Hamburger.png', name: 'แฮมเบอร์เกอร์' }
,
{
  id: 41,
  level: 19,
  img: 'Cotton_shirt.png',
  name: 'เสื้อเชิ้ตผ้าฝ้าย'
}
,
{
  id: 42,
  level: 19,
  img: 'Blue_woolly_hat.png',
  name: 'หมวกขนสัตว์สีน้ําเงิน'
}
,
{ id: 44, level: 20, img: 'Blue_sweater.png', name: 'เสื้อสีน้ําเงิน' }
,
{ id: 45, level: 21, img: 'Carrot_cake.png', name: 'เค้กแครอท' }
,
{ id: 46, level: 21, img: 'Wooly_chaps.png', name: 'กางเกงปุกปุย' }
,
{ id: 47, level: 22, img: 'Cherry.png', name: 'เชอร์รี่' }
,
{ id: 48, level: 23, img: 'Cream_cake.png', name: 'เค้กครีม' }
,
{
  id: 49,
  level: 23,
  img: 'Red_berry_cake.png',
  name: 'เค้กเบอร์รี่สีแดง'
}
,
{ id: 50, level: 24, img: 'Cheesecake.png', name: 'ชีสเค้ก' }
,
{ id: 51, level: 24, img: 'Silver_ore.png', name: 'แร่เงิน' }
,
{ id: 52, level: 24, img: 'Gold_ore.png', name: 'แร่ทองคํา ' }
,
{ id: 53, level: 24, img: 'Platinum_ore.png', name: 'แร่แพลตตินั่ม' }
,
{ id: 54, level: 24, img: 'Silver_bar.png', name: 'แท่งเงิน' }
,
{ id: 55, level: 25, img: 'Chili_pepper.png', name: 'พริก' }
,
{ id: 56, level: 25, img: 'Chili_popcorn.png', name: 'พริกป๊อปคอร์น' }
,
{ id: 57, level: 25, img: 'Gold_bar.png', name: 'แท่งทองคํา' }
,
{ id: 58, level: 25, img: 'Platinum_bar.png', name: 'แท่งแพลทินัม' }
,
{ id: 59, level: 25, img: 'Violet_dress.png', name: 'ชุดสีม่วง' }
,
{ id: 60, level: 26, img: 'Blackberry.png', name: 'แบล็กเบอร์รี่' }
,
{
  id: 61,
  level: 26,
  img: 'Blackberry_muffin.png',
  name: 'มัฟฟินแบล็กเบอร์รี่'
}
,
{ id: 62, level: 26, img: 'Carrot_juice.png', name: 'น้ําแครอท' }
,
{ id: 63, level: 27, img: 'Fish_fillet.png', name: 'เนื้อปลา' }
,
{ id: 64, level: 27, img: 'Fish_burger.png', name: 'เบอร์เกอร์ปลา' }
,
{ id: 65, level: 28, img: 'Apple_pie.png', name: 'พายแอปเปิ้ล' }
,
{ id: 66, level: 28, img: 'Fish_pie.png', name: 'พายปลา' }
,
{ id: 67, level: 28, img: 'Apple_juice.png', name: 'น้ําแอปเปิ้ล' }
,
{
  id: 68,
  level: 29,
  img: 'Vanilla_ice_cream.png',
  name: 'ไอศกรีมวานิลลา'
}
,
{ id: 69, level: 30, img: 'Tomato.png', name: 'มะเขือเทศ' }
,
{
  id: 70,
  level: 30,
  img: 'Roasted_tomatoes.png',
  name: 'มะเขือเทศย่าง'
}
,
{ id: 71, level: 30, img: 'Cherry_juice.png', name: 'น้ําเชอร์รี่' }
,
{ id: 72, level: 31, img: 'Tomato_juice.png', name: 'น้ํามะเขือเทศ' }
,
{ id: 73, level: 31, img: 'Berry_juice.png', name: 'น้ําเบอร์รี่' }
,
{ id: 74, level: 32, img: 'Goat_feed.png', name: 'อาหารแพะ' }
,
{ id: 75, level: 32, img: 'Goat_milk.png', name: 'นมแพะ' }
,
{ id: 76, level: 33, img: 'Goat_cheese.png', name: 'ชีสแพะ' }
,
{ id: 77, level: 33, img: 'Pizza.png', name: 'พิซซ่า' }
,
{ id: 78, level: 33, img: 'Coal.png', name: 'ถ่านหิน' }
,
{ id: 79, level: 33, img: 'Refined_coal.png', name: 'ถ่านหินกลั่น' }
,
{
  id: 80,
  level: 33,
  img: 'Cherry_popsicle.png',
  name: 'ไอติมเชอร์รี่'
}
,
{ id: 81, level: 34, img: 'Strawberry.png', name: 'สตรอว์เบอร์รี่' }
,
{ id: 82, level: 34, img: 'Feta_pie.png', name: 'เฟต้าพาย' }
,
{ id: 83, level: 34, img: 'Iron_ore.png', name: 'แร่เหล็ก' }
,
{ id: 84, level: 34, img: 'Iron_bar.png', name: 'เหล็กเส้น' }
,
{
  id: 85,
  level: 34,
  img: 'Strawberry_ice_cream.png',
  name: 'ไอศกรีมสตรอว์เบอร์รี่'
}
,
{ id: 86, level: 34, img: 'Wheat_bundle.png', name: 'มัดข้าวสาลี' }
,
{ id: 87, level: 34, img: 'Meat_bucket.png', name: 'ถังเนื้อ' }
,
{ id: 88, level: 35, img: 'Potato.png', name: 'มันฝรั่ง' }
,
{
  id: 89,
  level: 35,
  img: 'Strawberry_cake.png',
  name: 'เค้กสตรอเบอร์รี่'
}
,
{ id: 90, level: 35, img: 'Baked_potato.png', name: 'มันฝรั่งอบ' }
,
{ id: 91, level: 35, img: 'Apple_jam.png', name: 'แยมแอปเปิ้ล' }
,
{ id: 92, level: 36, img: 'Chocolate_cake.png', name: 'เค้กช็อคโกแลต' }
,
{ id: 93, level: 36, img: 'Casserole.png', name: 'หม้อตุ๋น' }
,
{ id: 94, level: 36, img: 'Cacao.png', name: 'โกโก้' }
,
{ id: 95, level: 36, img: 'Raspberry_jam.png', name: 'แยมราสเบอร์รี่' }
,
{ id: 96, level: 37, img: 'Spicy_pizza.png', name: 'พิซซ่ารสเผ็ด' }
,
{
  id: 97,
  level: 37,
  img: 'Blackberry_jam.png',
  name: 'แยมแบล็กเบอร์รี่'
}
,
{
  id: 98,
  level: 38,
  img: 'Potato_feta_cake.png',
  name: 'เค้กเฟต้ามันฝรั่ง'
}
,
{ id: 99, level: 38, img: 'Cherry_jam.png', name: 'แยมเชอร์รี่' }
,
{ id: 100, level: 38, img: 'Bracelet.png', name: 'วลัย' }
,
{ id: 101, level: 39, img: 'Potato_bread.png', name: 'ขนมปังมันฝรั่ง' }
,
{
  id: 102,
  level: 39,
  img: 'Shepherds_pie.png',
  name: 'พายของคนเลี้ยงแกะ'
}
,
{
  id: 103,
  level: 39,
  img: 'Chocolate_ice_cream.png',
  name: 'ไอศกรีมช็อกโกแลต'
}
,
{ id: 104, level: 39, img: 'Honeycomb.png', name: 'รังผึ้ง' }
,
{ id: 105, level: 39, img: 'Necklace.png', name: 'สร้อยคอ' }
,
{ id: 106, level: 39, img: 'Honey.png', name: 'น้ำผึ้ง' }
,
{
  id: 107,
  level: 40,
  img: 'Honey_popcorn.png',
  name: 'ข้าวโพดคั่วน้ําผึ้ง'
}
,
{ id: 108, level: 40, img: 'Diamond_ring.png', name: 'แหวนเพชร' }
,
{
  id: 109,
  level: 41,
  img: 'Fish_and_chips.png',
  name: 'ฟิชแอนด์ชิปส์'
}
,
{
  id: 110,
  level: 41,
  img: 'Iron_bracelet.png',
  name: 'สร้อยข้อมือเหล็ก'
}
,
{ id: 111, level: 42, img: 'Coffee_bean.png', name: 'เมล็ดกาแฟ' }
,
{ id: 112, level: 42, img: 'Espresso.png', name: 'เอสเพรสโซ่' }
,
{
  id: 113,
  level: 42,
  img: 'Honey_apple_cake.png',
  name: 'เค้กแอปเปิ้ลน้ําผึ้ง'
}
,
{ id: 114, level: 43, img: 'Caffe_latte.png', name: 'กาแฟกับนม' }
,
{
  id: 115,
  level: 44,
  img: 'Chocolate_popcorn.png',
  name: 'ป๊อปคอร์นช็อกโกแลต'
}
,
{
  id: 116,
  level: 44,
  img: 'Lobster_tail.png',
  name: 'หางกุ้งก้ามกราม'
}
,
{
  id: 117,
  level: 45,
  img: 'Frutti_di_Mare_pizza.png',
  name: 'พิซซ่า Frutti di Mare'
}
,
{ id: 118, level: 45, img: 'Caffe_mocha.png', name: 'กาแฟมอคค่า' }
,
{
  id: 119,
  level: 46,
  img: 'Raspberry_mocha.png',
  name: 'ราสเบอร์รี่มอคค่า'
}
,
{
  id: 120,
  level: 46,
  img: 'Lobster_soup.png',
  name: 'ซุปกุ้งก้ามกราม'
}
,
{ id: 121, level: 47, img: 'Hot_chocolate.png', name: 'ช็อคโกแลตร้อน' }
,
{ id: 122, level: 47, img: 'Tomato_soup.png', name: 'ซุปมะเขือเทศ' }
,
{ id: 123, level: 48, img: 'Red_scarf.png', name: 'ผ้าพันคอสีแดง' }
,
{
  id: 124,
  level: 48,
  img: 'Lobster_skewer.png',
  name: 'กุ้งก้ามกรามเสียบไม้'
}
,
{ id: 125, level: 48, img: 'Beeswax.png', name: 'ขี้ผึ้ง' }
,
{
  id: 126,
  level: 48,
  img: 'Strawberry_candle.png',
  name: 'เทียนสตรอเบอร์รี่'
}
,
{
  id: 127,
  level: 49,
  img: 'Rustic_bouquet.png',
  name: 'ช่อดอกไม้ชนบท'
}
,
{ id: 128, level: 49, img: 'Pumpkin_soup.png', name: 'ซุปฟักทอง' }
,
{ id: 129, level: 49, img: 'Asparagus.png', name: 'หน่อไม้ฝรั่ง' }
,
{
  id: 130,
  level: 49,
  img: 'Asparagus_quiche.png',
  name: 'คีชหน่อไม้ฝรั่ง'
}
,
{
  id: 131,
  level: 50,
  img: 'Strawberry_jam.png',
  name: 'แยมสตรอเบอร์รี่'
}
,
{ id: 132, level: 50, img: 'Duck_feather.png', name: 'ขนเป็ด' }
,
{ id: 133, level: 50, img: 'Sesame.png', name: 'งา' }
,
{ id: 134, level: 50, img: 'Sesame_ice_cream.png', name: 'ไอศกรีมงา' }
,
{
  id: 135,
  level: 51,
  img: 'Caramel_apple.png',
  name: 'แอปเปิ้ลคาราเมล'
}
,
{ id: 136, level: 51, img: 'Pillow.png', name: 'หมอน' }
,
{
  id: 137,
  level: 51,
  img: 'Asparagus_soup.png',
  name: 'ซุปหน่อไม้ฝรั่ง'
}
,
{ id: 138, level: 52, img: 'Toffee.png', name: 'ลูกกวาด' }
,
{
  id: 139,
  level: 52,
  img: 'Raspberry_candle.png',
  name: 'เทียนราสเบอร์รี่'
}
,
{ id: 140, level: 52, img: 'Pineapple.png', name: 'สับปะรด' }
,
{ id: 141, level: 52, img: 'Pineapple_juice.png', name: 'น้ําสับปะรด' }
,
{ id: 142, level: 53, img: 'Fish_soup.png', name: 'ซุปปลา' }
,
{ id: 143, level: 53, img: 'Lily.png', name: 'ลิลลี่' }
,
{ id: 144, level: 54, img: 'Soy_sauce.png', name: 'ซอสถั่วเหลือง' }
,
{ id: 145, level: 54, img: 'Chocolate.png', name: 'ช็อกโกแลต' }
,
{ id: 146, level: 54, img: 'Fancy_cake.png', name: 'เค้กแฟนซี' }
,
{ id: 147, level: 56, img: 'Rice.png', name: 'ข้าว' }
,
{ id: 148, level: 56, img: 'Sushi_roll.png', name: 'ซูชิโรล' }
,
{ id: 149, level: 57, img: 'Olive.png', name: 'มะกอก' }
,
{ id: 150, level: 57, img: 'Lollipop.png', name: 'อมยิ้ม' }
,
{ id: 151, level: 58, img: 'Lettuce.png', name: 'ผักกาดหอม' }
,
{ id: 152, level: 58, img: 'Feta_salad.png', name: 'สลัดเฟต้า' }
,
{ id: 153, level: 59, img: 'Lobster_sushi.png', name: 'ซูชิกุ้งมังกร' }
,
{ id: 154, level: 59, img: 'Blanket.png', name: 'ผ้าห่ม' }
,
{ id: 155, level: 60, img: 'Jelly_beans.png', name: 'ถั่วเยลลี่' }
,
{ id: 156, level: 60, img: 'Olive_oil.png', name: 'น้ํามันมะกอก' }
,
{ id: 157, level: 60, img: 'Garlic.png', name: 'กระเทียม' }
,
{ id: 158, level: 60, img: 'Garlic_bread.png', name: 'ขนมปังกระเทียม' }
,
{ id: 159, level: 61, img: 'Veggie_bagel.png', name: 'เบเกิลผัก' }
,
{ id: 160, level: 62, img: 'Mayonnaise.png', name: 'มายองเนส' }
,
{ id: 161, level: 62, img: 'BLT_salad.png', name: 'สลัด BLT' }
,
{ id: 162, level: 62, img: 'Caramel_latte.png', name: 'คาราเมลลาเต้' }
,
{ id: 163, level: 62, img: 'Peanuts.png', name: 'ถั่วลิสง' }
,
{ id: 164, level: 63, img: 'Sunflower.png', name: 'ทานตะวัน' }
,
{ id: 165, level: 63, img: 'Egg_sushi.png', name: 'ซูชิไข่' }
,
{
  id: 166,
  level: 63,
  img: 'Honey_peanuts.png',
  name: 'ถั่วลิสงน้ําผึ้ง'
}
,
{ id: 167, level: 64, img: 'Seafood_salad.png', name: 'สลัดทะเล' }
,
{ id: 168, level: 64, img: 'Berry_smoothie.png', name: 'เบอร์รี่ปั่น' }
,
{ id: 169, level: 64, img: 'Snack_mix.png', name: 'ขนมขบเคี้ยวผสม' }
,
{
  id: 170,
  level: 65,
  img: 'Bright_bouquet.png',
  name: 'ช่อดอกไม้สดใส'
}
,
{ id: 171, level: 65, img: 'Bacon_toast.png', name: 'ขนมปังปิ้งเบคอน' }
,
{ id: 172, level: 65, img: 'Pineapple_cake.png', name: 'เค้กสับปะรด' }
,
{ id: 173, level: 65, img: 'Chocolate_pie.png', name: 'พายช็อคโกแลต' }
,
{ id: 174, level: 65, img: 'Cabbage.png', name: 'กะหล่ำปลี' }
,
{ id: 175, level: 65, img: 'Cabbage_soup.png', name: 'ซุปกะหล่ําปลี' }
,
{ id: 176, level: 66, img: 'Lemon.png', name: 'มะนาว' }
,
{ id: 177, level: 66, img: 'Lemon_curd.png', name: 'เต้าหู้มะนาว' }
,
{ id: 178, level: 66, img: 'Olive_dip.png', name: 'น้ําจิ้มมะกอก' }
,
{ id: 179, level: 66, img: 'Egg_sandwich.png', name: 'แซนวิชไข่' }
,
{ id: 180, level: 66, img: 'Green_smoothie.png', name: 'กรีนสมูทตี้' }
,
{ id: 181, level: 67, img: 'Fresh_pasta.png', name: 'พาสต้าสด' }
,
{ id: 182, level: 67, img: 'Pasta_salad.png', name: 'สลัดพาสต้า' }
,
{ id: 183, level: 67, img: 'Lemon_pie.png', name: 'พายมะนาว' }
,
{
  id: 184,
  level: 67,
  img: 'Grilled_asparagus.png',
  name: 'หน่อไม้ฝรั่งย่าง'
}
,
{ id: 185, level: 68, img: 'Onion.png', name: 'หัวหอม' }
,
{ id: 186, level: 68, img: 'Grilled_onion.png', name: 'หัวหอมย่าง' }
,
{ id: 187, level: 68, img: 'Lemon_cake.png', name: 'เค้กมะนาว' }
,
{
  id: 188,
  level: 68,
  img: 'Peanut_butter_milkshake.png',
  name: 'มิลค์เชคเนยถั่ว'
}
,
{ id: 189, level: 69, img: 'Tomato_sauce.png', name: 'ซอสมะเขือเทศ' }
,
{ id: 190, level: 69, img: 'Honey_toast.png', name: 'ฮันนี่โทสต์' }
,
{ id: 191, level: 69, img: 'Fried_rice.png', name: 'ข้าวผัด' }
,
{
  id: 192,
  level: 70,
  img: 'Yogurt_smoothie.png',
  name: 'โยเกิร์ตปั่น'
}
,
{ id: 193, level: 70, img: 'Cloche_hat.png', name: 'หมวก Cloche' }
,
{ id: 194, level: 70, img: 'Cucumber.png', name: 'แตงกวา' }
,
{
  id: 195,
  level: 70,
  img: 'Cucumber_smoothie.png',
  name: 'แตงกวาปั่น'
}
,
{ id: 196, level: 71, img: 'Orange.png', name: 'ส้ม' }
,
{
  id: 197,
  level: 71,
  img: 'Flower_shawl.png',
  name: 'ผ้าคลุมไหล่ลายดอกไม้'
}
,
{ id: 198, level: 71, img: 'Orange_juice.png', name: 'น้ําส้ม' }
,
{
  id: 199,
  level: 71,
  img: 'Peanut_butter_and_jelly_sandwich.png',
  name: 'แซนวิชเนยถั่วและเยลลี่'
}
,
{ id: 200, level: 72, img: 'Onion_soup.png', name: 'ซุปหัวหอม' }
,
{ id: 201, level: 72, img: 'Lemon_candle.png', name: 'เทียนมะนาว' }
,
{ id: 202, level: 72, img: 'Top_hat.png', name: 'หมวกทรงสูง' }
,
{ id: 203, level: 72, img: 'Gnocchi.png', name: 'ญ็อกกี' }
,
{ id: 204, level: 72, img: 'Beetroot.png', name: 'หัวผักกาดหวาน' }
,
{ id: 205, level: 72, img: 'Winter_veggies.png', name: 'ผักเมืองหนาว' }
,
{ id: 206, level: 73, img: 'Rice_noodles.png', name: 'ก๋วยเตี๋ยวข้าว' }
,
{ id: 207, level: 73, img: 'Noodle_soup.png', name: 'ก๋วยเตี๋ยว' }
,
{
  id: 208,
  level: 73,
  img: 'Gracious_bouquet.png',
  name: 'ช่อดอกไม้ที่สง่างาม'
}
,
{ id: 209, level: 74, img: 'Bell_pepper.png', name: 'พริกหยวก' }
,
{ id: 210, level: 74, img: 'Marmalade.png', name: 'แยมผิวส้ม' }
,
{ id: 211, level: 74, img: 'Sun_hat.png', name: 'หมวกกันแดด' }
,
{ id: 212, level: 74, img: 'Veggie_lasagna.png', name: 'ลาซานญ่าผัก' }
,
{ id: 213, level: 74, img: 'Veggie_platter.png', name: 'จานผัก' }
,
{ id: 214, level: 75, img: 'Hot_dog.png', name: 'ฮอทดอก' }
,
{ id: 215, level: 75, img: 'Coleslaw.png', name: 'โคลสลอว์' }
,
{ id: 216, level: 75, img: 'Cotton_Candy.png', name: 'สายไหม' }
,
{ id: 217, level: 76, img: 'Peach.png', name: 'พีช' }
,
{ id: 218, level: 76, img: 'Peach_tart.png', name: 'ทาร์ตพีช' }
,
{ id: 219, level: 76, img: 'Tofu_dog.png', name: 'สุนัขเต้าหู้' }
,
{ id: 220, level: 76, img: 'Big_sushi_roll.png', name: 'ซูชิโรลใหญ่' }
,
{ id: 221, level: 76, img: 'Beetroot_salad.png', name: 'สลัดบีทรูท' }
,
{ id: 222, level: 76, img: 'Plain_Donut.png', name: 'โดนัทธรรมดา' }
,
{ id: 223, level: 77, img: 'Salsa.png', name: 'ซัลซ่า' }
,
{ id: 224, level: 77, img: 'Taco.png', name: 'ทาโก้' }
,
{
  id: 225,
  level: 77,
  img: 'Colourful_omelet.png',
  name: 'ไข่เจียวหลากสี'
}
,
{
  id: 226,
  level: 77,
  img: 'Spring_omelet.png',
  name: 'ไข่เจียวฤดูใบไม้ผลิ'
}
,
{ id: 227, level: 78, img: 'Summer_rolls.png', name: 'ซัมเมอร์โรล' }
,
{ id: 228, level: 78, img: 'Orange_sorbet.png', name: 'เชอร์เบทส้ม' }
,
{ id: 229, level: 78, img: 'Corn_dog.png', name: 'คอร์นด็อก' }
,
{ id: 230, level: 78, img: 'Potato_soup.png', name: 'ซุปมันฝรั่ง' }
,
{ id: 231, level: 78, img: 'Ginger.png', name: 'ขิง' }
,
{ id: 232, level: 78, img: 'Sesame_brittle.png', name: 'งาเปราะ' }
,
{ id: 233, level: 78, img: 'Affogato.png', name: 'อัฟโฟกาโต' }
,
{ id: 234, level: 79, img: 'Fish_taco.png', name: 'ทาโก้ปลา' }
,
{ id: 235, level: 79, img: 'Peach_jam.png', name: 'แยมพีช' }
,
{
  id: 236,
  level: 79,
  img: 'Lobster_pasta.png',
  name: 'พาสต้ากุ้งมังกร'
}
,
{
  id: 237,
  level: 79,
  img: 'Cucumber_sandwich.png',
  name: 'แซนวิชแตงกวา'
}
,
{ id: 238, level: 79, img: 'Spicy_fish.png', name: 'ปลารสเผ็ด' }
,
{ id: 239, level: 79, img: 'Sprinkled_Donut.png', name: 'โดนัทโรย' }
,
{ id: 240, level: 79, img: 'Cheese_omelet.png', name: 'ไข่เจียวชีส' }
,
{ id: 241, level: 80, img: 'Tea_leaf.png', name: 'ใบชา' }
,
{ id: 242, level: 80, img: 'Green_tea.png', name: 'ชาเขียว' }
,
{ id: 243, level: 80, img: 'Onion_dog.png', name: 'สุนัขหัวหอม' }
,
{ id: 244, level: 80, img: 'Stuffed_peppers.png', name: 'พริกยัดไส้' }
,
{ id: 245, level: 81, img: 'Milk_tea.png', name: 'ชานม' }
,
{
  id: 246,
  level: 81,
  img: 'Bell_pepper_soup.png',
  name: 'ซุปพริกหยวก'
}
,
{
  id: 247,
  level: 81,
  img: 'Chocolate_fondue.png',
  name: 'ช็อกโกแลตฟองดู'
}
,
{ id: 248, level: 82, img: 'Peony.png', name: 'โบตั๋น' }
,
{ id: 249, level: 82, img: 'Quesadilla.png', name: 'Quesadilla' }
,
{ id: 250, level: 82, img: 'Fruit_salad.png', name: 'สลัดผลไม้' }
,
{ id: 251, level: 82, img: 'Crunchy_Donut.png', name: 'โดนัทกรุบกรอบ' }
,
{
  id: 252,
  level: 83,
  img: 'Pasta_carbonara.png',
  name: 'พาสต้าคาโบนาร่า'
}
,
{ id: 253, level: 83, img: 'Peach_ice_cream.png', name: 'ไอศกรีมพีช' }
,
{ id: 254, level: 83, img: 'Honey_tea.png', name: 'ชาน้ําผึ้ง' }
,
{ id: 255, level: 83, img: 'Broccoli.png', name: 'บรอกโคลี' }
,
{
  id: 256,
  level: 83,
  img: 'Broccoli_pasta.png',
  name: 'พาสต้าบร็อคโคลี่'
}
,
{ id: 257, level: 83, img: 'Rice_omelet.png', name: 'ข้าวไข่เจียว' }
,
{ id: 258, level: 84, img: 'Summer_salad.png', name: 'สลัดฤดูร้อน' }
,
{ id: 259, level: 84, img: 'Grapes.png', name: 'องุ่น' }
,
{ id: 260, level: 84, img: 'Grape_juice.png', name: 'น้ําองุ่น' }
,
{ id: 261, level: 84, img: 'Onion_melt.png', name: 'หัวหอมละลาย' }
,
{ id: 262, level: 84, img: 'Honey_soap.png', name: 'สบู่น้ําผึ้ง' }
,
{ id: 263, level: 84, img: 'Lemon_lotion.png', name: 'โลชั่นมะนาว' }
,
{
  id: 264,
  level: 84,
  img: 'Colorful_Candles.png',
  name: 'เทียนหลากสี'
}
,
{ id: 265, level: 85, img: 'Mint.png', name: 'โรงกษาปณ์' }
,
{ id: 266, level: 85, img: 'Grape_jam.png', name: 'แยมองุ่น' }
,
{
  id: 267,
  level: 85,
  img: 'Mint_ice_cream.png',
  name: 'ไอศกรีมมิ้นท์'
}
,
{ id: 268, level: 86, img: 'Flower_crown.png', name: 'มงกุฎดอกไม้' }
,
{ id: 269, level: 86, img: 'Lemon_tea.png', name: 'ชามะนาว' }
,
{ id: 270, level: 86, img: 'Bacon_fondue.png', name: 'เบคอนฟองดู' }
,
{
  id: 271,
  level: 86,
  img: 'Peanut_noodles.png',
  name: 'บะหมี่ถั่วลิสง'
}
,
{
  id: 272,
  level: 86,
  img: 'Gingerbread_cookie.png',
  name: 'คุกกี้ขนมปังขิง'
}
,
{ id: 273, level: 86, img: 'Cream_Donut.png', name: 'ครีมโดนัท' }
,
{ id: 275, level: 87, img: 'Nachos.png', name: 'นาโชส' }
,
{ id: 276, level: 87, img: 'Spicy_pasta.png', name: 'พาสต้ารสเผ็ด' }
,
{ id: 277, level: 87, img: 'Broccoli_soup.png', name: 'ซุปบร็อคโคลี่' }
,
{ id: 278, level: 87, img: 'Bacon_fries.png', name: 'เบคอนทอด' }
,
{
  id: 279,
  level: 87,
  img: 'Potato_Omelet.png',
  name: 'ไข่เจียวมันฝรั่ง'
}
,
{ id: 281, level: 88, img: 'Mixed_smoothie.png', name: 'สมูทตี้ผสม' }
,
{ id: 282, level: 88, img: 'Banana.png', name: 'กล้วย' }
,
{
  id: 283,
  level: 88,
  img: 'Iced_banana_latte.png',
  name: 'ลาเต้กล้วยเย็น'
}
,
{
  id: 284,
  level: 88,
  img: 'Apple_ginger_tea.png',
  name: 'ชาขิงแอปเปิ้ล'
}
,
{ id: 285, level: 88, img: 'Bacon_Donut.png', name: 'เบคอนโดนัท' }
,
{ id: 286, level: 88, img: 'Passion_fruit.png', name: 'เสาวรส' }
,
{
  id: 287,
  level: 88,
  img: 'Passion_fruit_juice.png',
  name: 'น้ําเสาวรส'
}
,
{ id: 288, level: 89, img: 'Orange_tea.png', name: 'ชาส้ม' }
,
{ id: 289, level: 89, img: 'Fruit_cake.png', name: 'เค้กผลไม้' }
,
{ id: 290, level: 89, img: 'Mushroom.png', name: 'เห็ด' }
,
{ id: 291, level: 89, img: 'Mushroom_salad.png', name: 'สลัดเห็ด' }
,
{ id: 292, level: 89, img: 'Tofu_stir_fry.png', name: 'ผัดเต้าหู้' }
,
{ id: 293, level: 90, img: 'Candy_bouquet.png', name: 'ช่อดอกไม้' }
,
{ id: 294, level: 90, img: 'Eggplant.png', name: 'มะเขือ' }
,
{
  id: 295,
  level: 90,
  img: 'Grilled_eggplant.png',
  name: 'มะเขือยาวย่าง'
}
,
{ id: 296, level: 91, img: 'Banana_bread.png', name: 'ขนมปังกล้วยหอม' }
,
{ id: 297, level: 91, img: 'Cheese_fondue.png', name: 'ฟองดูชีส' }
,
{ id: 298, level: 91, img: 'Hand_pies.png', name: 'พายมือ' }
,
{ id: 299, level: 91, img: 'Pickles.png', name: 'ดอง' }
,
{ id: 300, level: 92, img: 'Watermelon.png', name: 'แตงโม' }
,
{ id: 301, level: 92, img: 'Iced_tea.png', name: 'ชาเย็น' }
,
{
  id: 302,
  level: 92,
  img: 'Goat_cheese_toast.png',
  name: 'ขนมปังปิ้งชีสแพะ'
}
,
{ id: 303, level: 92, img: 'Watermelon_juice.png', name: 'น้ําแตงโม' }
,
{
  id: 304,
  level: 92,
  img: 'Birthday_Bouquet.png',
  name: 'ช่อดอกไม้วันเกิด'
}
,
{ id: 305, level: 92, img: 'Passion_fruit_pie.png', name: 'พายเสาวรส' }
,
{ id: 306, level: 93, img: 'Soft_bouquet.png', name: 'ช่อดอกไม้นุ่ม' }
,
{
  id: 307,
  level: 93,
  img: 'Black_sesame_smoothie.png',
  name: 'สมูทตี้งาดํา'
}
,
{ id: 308, level: 93, img: 'Exfoliating_soap.png', name: 'สบู่ขัดผิว' }
,
{ id: 309, level: 93, img: 'Filled_Donut.png', name: 'โดนัทสอดไส้' }
,
{ id: 310, level: 94, img: 'Plum.png', name: 'พลัม' }
,
{
  id: 311,
  level: 94,
  img: 'Banana_pancakes.png',
  name: 'แพนเค้กกล้วยหอม'
}
,
{ id: 312, level: 94, img: 'Plum_jam.png', name: 'แยมพลัม' }
,
{ id: 313, level: 94, img: 'Clay.png', name: 'ดินเหนียว' }
,
{ id: 314, level: 94, img: 'Tea_pot.png', name: 'กาน้ําชา' }
,
{ id: 315, level: 95, img: 'Floral_candle.png', name: 'เทียนดอกไม้' }
,
{ id: 316, level: 95, img: 'Chocolate_roll.png', name: 'ช็อกโกแลตโรล' }
,
{ id: 317, level: 95, img: 'Canned_fish.png', name: 'ปลากระป๋อง' }
,
{ id: 318, level: 95, img: 'Chickpea.png', name: 'ถั่วชิกพี' }
,
{ id: 319, level: 95, img: 'Hummus.png', name: 'ฮัมมัส' }
,
{ id: 320, level: 96, img: 'Banana_split.png', name: 'กล้วยแยก' }
,
{ id: 321, level: 96, img: 'Fish_skewer.png', name: 'ปลาเสียบไม้' }
,
{ id: 322, level: 96, img: 'Passion_fruit_jam.png', name: 'แยมเสาวรส' }
,
{ id: 323, level: 96, img: 'Potted_plant.png', name: 'ไม้กระถาง' }
,
{ id: 324, level: 97, img: 'Mint_tea.png', name: 'ชามินต์' }
,
{
  id: 325,
  level: 97,
  img: 'Mushroom_pot_pie.png',
  name: 'พายหม้อเห็ด'
}
,
{ id: 326, level: 97, img: 'Mango.png', name: 'มะม่วง' }
,
{ id: 327, level: 97, img: 'Mango_juice.png', name: 'น้ํามะม่วง' }
,
{ id: 328, level: 98, img: 'Flower_pendant.png', name: 'จี้ดอกไม้' }
,
{ id: 329, level: 98, img: 'Chili_poppers.png', name: 'พริกป่น' }
,
{ id: 330, level: 98, img: 'Falafel.png', name: 'ฟาลาเฟล' }
,
{ id: 331, level: 98, img: 'Kimchi.png', name: 'กิมจิ' }
,
{
  id: 332,
  level: 99,
  img: 'Eggplant_parmesan.png',
  name: 'มะเขือยาวพาเมซาน'
}
,
{
  id: 333,
  level: 99,
  img: 'Honey_face_mask.png',
  name: 'มาส์กหน้าน้ําผึ้ง'
}
,
{ id: 334, level: 99, img: 'Clay_mug.png', name: 'แก้วดินเผา' }
,
{ id: 335, level: 99, img: 'Rich_fudge.png', name: 'ฟัดจ์เข้มข้น' }
,
{ id: 336, level: 100, img: 'Cocoa_smoothie.png', name: 'โกโก้ปั่น' }
,
{ id: 337, level: 100, img: 'Fried_candy_bar.png', name: 'ลูกกวาดทอด' }
,
{
  id: 338,
  level: 100,
  img: 'Tart_dressing.png',
  name: 'น้ําสลัดทาร์ต'
}
,
{
  id: 339,
  level: 100,
  img: 'Tropical_fondue.png',
  name: 'ฟองดูเขตร้อน'
}
,
{ id: 340, level: 101, img: 'Mushroom_pasta.png', name: 'พาสต้าเห็ด' }
,
{ id: 341, level: 101, img: 'Coconut.png', name: 'มะพร้าว' }
,
{ id: 342, level: 101, img: 'Macaroon.png', name: 'มาการอง' }
,
{ id: 343, level: 102, img: 'Plum_smoothie.png', name: 'สมูทตี้บ๊วย' }
,
{ id: 344, level: 102, img: 'Dried_fruit.png', name: 'ผลไม้อบแห้ง' }
,
{ id: 345, level: 102, img: 'Mint_fudge.png', name: 'มิ้นท์ฟัดจ์' }
,
{
  id: 346,
  level: 102,
  img: 'Coconut_ice_cream.png',
  name: 'ไอศกรีมมะพร้าว'
}
,
{ id: 347, level: 103, img: 'Samosa.png', name: 'ซาโมซ่า' }
,
{
  id: 348,
  level: 103,
  img: 'Plain_yogurt.png',
  name: 'โยเกิร์ตธรรมดา'
}
,
{ id: 349, level: 104, img: 'Mushroom_soup.png', name: 'ซุปเห็ด' }
,
{ id: 350, level: 104, img: 'Chili_fudge.png', name: 'พริกฟัดจ์' }
,
{
  id: 351,
  level: 104,
  img: 'Tropical_smoothie.png',
  name: 'ทรอปิคอลสมูทตี้'
}
,
{ id: 352, level: 104, img: 'Guava.png', name: 'ฝรั่ง' }
,
{ id: 353, level: 104, img: 'Guava_juice.png', name: 'น้ําฝรั่ง' }
,
{
  id: 354,
  level: 104,
  img: 'Guava_compote.png',
  name: 'ผลไม้แช่อิ่มฝรั่ง'
}
,
{
  id: 355,
  level: 105,
  img: 'Strawberry_yogurt.png',
  name: 'โยเกิร์ตสตรอเบอร์รี่'
}
,
{ id: 356, level: 106, img: 'Veggie_bouquet.png', name: 'ช่อผัก' }
,
{
  id: 357,
  level: 106,
  img: 'Chickpea_stew.png',
  name: 'สตูว์ถั่วชิกพี'
}
,
{ id: 358, level: 106, img: 'Fruit_sorbet.png', name: 'เชอร์เบทผลไม้' }
,
{ id: 359, level: 107, img: 'Pomegranate.png', name: 'ทับทิม' }
,
{ id: 360, level: 107, img: 'Pomegranate_tea.png', name: 'ชาทับทิม' }
,
{ id: 361, level: 108, img: 'Lemon_fudge.png', name: 'เลมอนฟัดจ์' }
,
{
  id: 362,
  level: 108,
  img: 'Pomegranate_cake.png',
  name: 'เค้กทับทิม'
}
,
{ id: 363, level: 109, img: 'Hummus_wrap.png', name: 'ห่อฮัมมุส' }
,
{
  id: 364,
  level: 109,
  img: 'Tropical_yogurt.png',
  name: 'ทรอปิคอลโยเกิร์ต'
}
,
{ id: 365, level: 109, img: 'Chili_stew.png', name: 'สตูว์พริก' }
,
{
  id: 366,
  level: 109,
  img: 'Plain_cupcake.png',
  name: 'คัพเค้กธรรมดา'
}
,
{ id: 367, level: 109, img: 'Guava_cupcake.png', name: 'คัพเค้กฝรั่ง' }
,
{ id: 368, level: 110, img: 'Rice_ball.png', name: 'ข้าวปั้น' }
,
{ id: 369, level: 111, img: 'Peanut_fudge.png', name: 'ฟัดจ์ถั่วลิสง' }
,
{
  id: 370,
  level: 112,
  img: 'Tropical_cupcake.png',
  name: 'คัพเค้กเขตร้อน'
}
,
{ id: 371, level: 112, img: 'Winter_stew.png', name: 'สตูว์ฤดูหนาว' }
,
{
  id: 372,
  level: 114,
  img: 'Cookie_cupcake.png',
  name: 'คัพเค้กคุกกี้'
}
,
{
  id: 373,
  level: 114,
  img: 'Plain_waffles.png',
  name: 'วาฟเฟิลธรรมดา'
}
,
{
  id: 374,
  level: 114,
  img: 'Berry_waffles.png',
  name: 'วาฟเฟิลเบอร์รี่'
}
,
{
  id: 375,
  level: 114,
  img: 'Plain_waffles.png',
  name: 'วาฟเฟิลธรรมดา'
}
,
{ id: 376, level: 117, img: 'Orange_salad.png', name: 'สลัดส้ม' }
,
{
  id: 377,
  level: 117,
  img: 'Chocolate_waffles.png',
  name: 'วาฟเฟิลช็อกโกแลต'
}
,
{
  id: 378,
  level: 119,
  img: 'Breakfast_waffles.png',
  name: 'วาฟเฟิลอาหารเช้า'
}
,
{ id: 379, level: 119, img: 'Oats.png', name: 'ข้าวโอ๊ต' }
,
{
  id: 380,
  level: 119,
  img: 'Breakfast_bowl.png',
  name: 'ชามอาหารเช้า'
}
,
{
  id: 381,
  level: 119,
  img: 'Apple_porridge.png',
  name: 'โจ๊กแอปเปิ้ล'
}
,
{
  id: 382,
  level: 120,
  img: 'Pineapple_coconut_bars.png',
  name: 'มะพร้าวสับปะรดแท่ง'
}
,
{ id: 383, level: 120, img: 'Sweet_porridge.png', name: 'โจ๊กหวาน' }
,
{ id: 384, level: 121, img: 'Rich_soap.png', name: 'สบู่เข้มข้น' }
,
{ id: 385, level: 122, img: 'Fresh_porridge.png', name: 'โจ๊กสด' }
,
{
  id: 386,
  level: 124,
  img: 'Vanilla_milkshake.png',
  name: 'วานิลลามิลค์เชค'
}
,
{
  id: 387,
  level: 125,
  img: 'Mocha_milkshake.png',
  name: 'มอคค่ามิลค์เชค'
}
,
{
  id: 388,
  level: 126,
  img: 'Fruity_milkshake.png',
  name: 'ฟรุ๊ตตี้มิลค์เชค'
}]
