/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('products').del()
    .then(() => {
      return knex('products').insert([{
        id: 1,
        name: 'Kent Beard and Moustache Comb, Fine',
        image: 'http://www.westcoastshaving.com/resize/shared/images/kent-beard-and-moustache-comb-fine.jpg',
        rating: 4.5,
        price: 5.5,
        description: 'Kent Extra Small Men\'s moustache and beard comb is 73mm fine toothed comb. This specialist comb is perfect for grooming, maintaining and trimming facial hair.',
        keywords: 'moustache, beard, comb',
        on_sale: false
      }, {
        id: 2,
        name: 'Firehourse Moustache Wax, Wacky Tacky',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Firehouse-Moustache-Wax-Wacky-Tacky/firehouse-moustache-wax-tacky-new.jpg',
        rating: 5,
        price: 14,
        description: 'This Firehouse Moustache Wax, Wacky Tacky offers the firmest possible hold, so if your facial hair is sparse, thin, or just generally hard to manage, this is the product for you.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 3,
        name: 'Captain Fawcett\'s Moustache Wax Expedition Strength',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Captain-Fawcett-s-Moustache-Wax-Expedition-Strength/captain-fawcetts-moustache-wax-expedition-strength-new.jpg',
        rating: 4,
        price: 17,
        description: 'Have you ever gone exploring and found that your mustache wax just didn\'t hold up? Maybe it\'s because you weren\'t using Captain Fawcett\'s Expedition Strength wax. This product gives you a very firm hold, which is great for guys who really want to go for that old-fashioned look, handlebars and all.',
        keywords: 'moustache, wax',
        on_sale: true
      }, {
        id: 4,
        name: 'Doc Elliott Bread Balm, Rugged',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Doc-Elliott-Beard-Balm-Rugged/doc-elliott-beard-balm-rugged.jpg',
        rating: 5,
        price: 18,
        description: 'Doc Elliott Beard Balm, Rugged brings you a product that meets your need for an all-natural, authentic, great smelling product that offers hold and conditioning. Established in 2012, Doc Elliott values the tradition of men\'s grooming while also remaining innovative and fresh.',
        keywords: 'beard, wax',
        on_sale: false
      }, {
        id: 5,
        name: 'Firehouse Moustache Wax, Dark',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Firehouse-Moustache-Wax-Dark/firehouse-moustache-wax-dark-new.jpg',
        rating: 5,
        price: 14,
        description: 'You\'ll find that this Firehouse Moustache Wax, Dark is very easy to apply and that it offers a firm hold that lasts a long time.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 6,
        name: 'Billy Jealousy Beard Envy Kit',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Billy-Jealousy-Beard-Envy-Kit/billy-jealousy-beard-envy-kit.jpg',
        rating: 3,
        price: 25,
        description: 'So many modern men want to express their personalities through their facial hair. The trick is in doing so without looking like a grizzly bear or a man who\'s just escaped the Alaskan wilderness. To have that right balance of self-expression and taste, one needs to have the right tools and products. Whether you\'re at home or on the go, the Billy Jealousy Beard Envy Kit is perfect for keeping your whiskers just the way you want them.',
        keywords: 'beard, kit, wash, brush, conditioner',
        on_sale: true
      }, {
        id: 7,
        name: 'Brooklyn Grooming Classic Beard Balm, Wiliamsburg',
        image: 'http://www.westcoastshaving.com/resize/shared/images/brooklyn-grooming-classic-beard-balm-williamsburg.jpg',
        rating: 3.5,
        price: 26,
        description: 'Choose only the right product for your facial hair! The Brooklyn Grooming Classic Beard Balm, Williamsburg is the perfect one to moisturize and style your bush. Its non comedogenic property makes it the perfect styling pomade without the dry feeling. Infused with various moisturizing oils like Grape seed, Sesame, Argan, and Jojoba, this formula will surely keep your beard properly moisturized.',
        keywords: 'beard, balm',
        on_sale: false
      }, {
        id: 8,
        name: 'Captain Fawcett\'s Moustache Wax, Sandalwood',
        image: 'http://www.westcoastshaving.com/resize/shared/images/captain-fawcetts-moustache-wax-sandalwood.jpg',
        rating: 5,
        price: 16,
        description: 'Captain Fawcett makes some great grooming products and this sandalwood scented mustache wax is certainly among them. It has a medium hold, which is perfect for most people.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 9,
        name: 'Cowboy Comb, Black',
        image: 'http://www.westcoastshaving.com/resize/shared/images/cowboy-comb-black.jpg',
        rating: 3.5,
        price: 5.99,
        description: 'Mustaches are all the rage these days, but for those who actually have one, maintaining them really does require special care. Enter the Cowboy Comb. . . the comb that started a legacy. Shaped like and perfectly contoured for mustaches, it has 27 teeth, is black in color and is perfect for grooming the hair right under your nose.',
        keywords: 'moustache, comb',
        on_sale: false
      }, {
        id: 10,
        name: 'Prospector Co. Burroughs Beard Oil',
        image: 'http://www.westcoastshaving.com/resize/shared/images/prospector-co.-burroughs-beard-oil.jpg',
        rating: 5,
        price: 28,
        description: 'Have you ever heard of beard oil? No, it\'s not something that you harvest by squeezing some unfortunate man\'s facial hair. It is actually a product that you use to help keep the hair on a man\'s face looking and smelling great, and Prospector Co. Burroughs Beard Oil could be just what you need to keep your own face fur in top condition.',
        keywords: 'beard, oil',
        on_sale: false
      }, {
        id: 11,
        name: 'Beard Balm',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Beard-Balm/beard-balm.jpg',
        rating: 4.5,
        price: 15.99,
        description: 'Beard Balm is a wonderful product made for our friends with a little of facial scruff. Hand-crafted in Detroit, it contains the best all-natural ingredients, including the oil of grapeseed and coconut and other pure essential oils. These oils give this product a light, fresh scent that you will love to rub into your whiskers and keep near your sniffer all day long. It\'s a natural scent that will keep you coming back each day and will make the ladies take notice.',
        keywords: 'beard, balm',
        on_sale: false
      }, {
        id: 12,
        name: 'Beardbrand Beard Oil, Spiced Citrus',
        image: 'http://www.westcoastshaving.com/resize/shared/images/beardbrand-beard-oil-spiced-citrus.jpg',
        rating: 3,
        price: 22,
        description: 'Made with the finest blend of oils, Beardbrand Beard Oil, Spiced Citrus will leave your beard feeling and smelling amazing. This stuff is the real deal.',
        keywords: 'beard, oil',
        on_sale: true
      }, {
        id: 13,
        name: 'Beardbrand Beard Oil, Tea Tree',
        image: 'http://www.westcoastshaving.com/resize/shared/images/beardbrand-beard-oil-tea-tree.jpg',
        rating: 5,
        price: 25,
        description: 'Beardbrand Beard Oil, Tea Tree is the perfect mix of cool, crisp, and clean. It\'s like a refreshing hike through an alpine forest. The tea tree and peppermint oils will brighten your mood instantly. Beardbrand uses only the finest blend of oils that will leave your beard shiny and soft, with absolutely no greasiness.',
        keywords: 'beard, oil',
        on_sale: false
      }, {
        id: 14,
        name: 'Beardbrand Beard Oil, Free Ranger',
        image: 'http://www.westcoastshaving.com/resize/shared/images/beardbrand-beard-oil-tree-ranger.jpg',
        rating: 4.5,
        price: 25,
        description: 'Beardbrand Beard Oil is as natural as it gets. Using only the purest essential oils, the Tree Ranger scent blends the flavors of eucalyptus, cedar wood, and pinewood perfectly to bring you a pine-fresh mountain experience for your beard. Use a small amount to tame your face fuzz, and give your beard the luxury of softness while also adding needed moisture to your skin. And smell like an urban adventurer while doing it.',
        keywords: 'beard, oil',
        on_sale: false
      }, {
        id: 15,
        name: 'Beardbrand Mustache Wax, Free Ranger',
        image: 'http://www.westcoastshaving.com/resize/shared/images/beardbrand-mustache-wax-tree-ranger.jpg',
        rating: 4,
        price: 7,
        description: 'YBeardbrand Mustache Wax is made with all natural ingredients for the safest, purest hold for your \'stache. Made with eucalyptus, cedarwood and pinewood essential oils, the Tree Ranger scent is earthy and fresh. It\'s like carrying around your very own pine forest right under your nose.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 16,
        name: 'Big Red Beard Comb No.5, live & Die by the Beard, Special Edition, Makore',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Big-Red-Beard-Comb-No-5-Live-Die-by-the-Beard-Special-Edition-Makore/big-red-beard-comb-no-5-live-and-die-by-the-beard-makore.jpg',
        rating: 5,
        price: 25.99,
        description: 'If you are looking for a beard comb as epic as your face forest, then you are in luck. Whip this out of your pocket and the ladies will swoon and men will gnash their teeth in envy. When you "live and die by the beard", you need this grooming utensil to declare it to the masses. Get Big Red Beard Comb No.5, Live & Die by the Beard, Special Edition, Makore.',
        keywords: 'beard, comb',
        on_sale: false
      }, {
        id: 17,
        name: 'Big Red Beard Comb No.7, Walnut',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Big-Red-Beard-Comb-No-7-Walnut/big-red-beard-comb-no-7-walnut.jpg',
        rating: 5,
        price: 23.99,
        description: 'Big Red Beard Combs are crafting such a beautiful product that if you didn\'t already have a beard you would want to grow one just so you could own this product. These handcrafted marvels were inspired by the artisan\'s background in furniture making and beard growing.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 18,
        name: 'brroklyn Grooming Beard Oil, Commando',
        image:'http://www.westcoastshaving.com/resize/shared/images/brooklyn-grooming-beard-oil-commando.jpg',
        rating: 5,
        price: 29,
        description: 'So, you\'ve grown a great beard and have recently discovered that dandruff is a thing you didn\'t expect there. Brooklyn Grooming Beard Oil, Commando, can help. The Commando refers to the fact that this product has no scent in it, which is great for people who are sensitive to colognes and perfumes.',
        keywords: 'beard, oil',
        on_sale: true
      }, {
        id: 19,
        name: 'Gold Dachs Bartwichse Hungarian Moustache Wax',
        image: 'http://www.westcoastshaving.com/resize/shared/images/gold-dachs-bartwichse-hungarian-moustache-wax.jpg',
        rating: 5,
        price: 19.99,
        description: 'This Gold Dachs Bartwichse Hungarian Moustache Wax has stood the test of time - the original formula was actually used by the artist Salvador Dali. It\'s lightly scented with vanilla and is a good, stiff product that can also be used on your beard.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 20,
        name: 'Lockhart\'s Heavy Duty Moustache Wax, Brown',
        image: 'http://www.westcoastshaving.com/resize/shared/images/lockharts-heavy-duty-moustache-wax.jpg',
        rating: 5,
        price: 7.99,
        description: 'Sometimes you need to tame that mustache and that\'s where Lockhart\'s Heavy Duty Moustache Wax comes in. This is the kind of product that allows you to sculpt your facial hair however you wish but that also provides other benefits that are just as important, even if you prefer a more subtle style. This conditions and increases the volume of your facial hair, ensuring that you always have the best look possible. Whether you go for a push broom or a full on villain set of handlebars, you\'ll be very happy with the results you get from this particular product.',
        keywords: 'moustache, wax',
        on_sale: true
      }, {
        id: 21,
        name: 'Tweezerman Nose Ear and Facial Hair Scissors, Stainless',
        image: 'http://www.westcoastshaving.com/resize/shared/images/tweezerman-nose-ear-and-facial-hair-scissors-stainless.jpg',
        rating: 3,
        price: 17.99,
        description: 'Facial Scissors truly are the best for getting rid of those nasty nose or ear hair or even for keeping that mustache and beard well-groomed. If you\'re not into the whole grizzly look, then you\'d enjoy Tweezerman\'s wide variety of grooming tools.',
        keywords: 'Scissors',
        on_sale: false
      }, {
        id: 22,
        name: 'Abraham\'s Beard Oil, Barbershop',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Abraham-s-Beard-Oil-Barbershop-1-oz/abrahams-beard-oil-barbershop-full-oz.jpg',
        rating: 4,
        price: 21.99,
        description: 'Abraham\'s Men\'s Products wants men everywhere to sport their facial hair with pride, which is why they have developed a whole range of products to keep your beard healthy. When you are looking a little more homeless than home-run, get Abraham\'s Beard Oil, Barbershop.',
        keywords: 'beard, oil',
        on_sale: true
      }, {
        id: 23,
        name: 'Abraham\'s Beard Oil, Fragrance Free',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Abraham-s-Beard-Oil-Fragrance-Free-1oz/abrahams-beard-oil-fragrance-free-full-oz.jpg',
        rating: 4,
        price: 24.99,
        description: 'Don\'t have a beard oil yet? Well, what are you waiting for? If you haven\'t heard about all the benefits for using this grooming essential, then let us enlighten you. Let Abraham\'s Beard Oil, Fragrance-free illuminate your path to beard health. You don\'t want to miss this part of your routine.',
        keywords: 'beard, oil',
        on_sale: false
      }, {
        id: 24,
        name: 'Antica Barbieria Colla Beard Conditioning Balm with Jojoba Oil',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Antica-Barbieria-Colla-Beard-Conditioning-Balm-with-Jojoba-Oil-100ml/antica-barbieria-colla-beard-conditioning-balm-jojoba-oil.jpg',
        rating: 4.5,
        price: 41,
        description: 'If you\'re a beard lover, then you need to experience the luxury of Antica Barbieria Colla. You might think a European shave house isn\'t exactly the habitat for a full-fledged, full-growth gentleman, but you would be wrong. This iconic barbershop in Milan, Italy is focused on all aspects of men\'s grooming. And the line of products that they are releasing shows the expertise gained from over a hundred years of experience.',
        keywords: 'beard, conditioning, balm',
        on_sale: false
      }, {
        id: 25,
        name: 'Antica Barbieria Colla Beard Dry Oil, Bitter Orange',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Antica-Barbieria-Colla-Beard-Dry-Oil-Bitter-Orange-150ml/antica-barbieria-colla-beard-dry-oil-bitter-orange.jpg',
        rating: 4,
        price: 79,
        description: 'Visiting a prestigious, high-class, European shaving house might not be on your "to do" list if you are a bearded gentleman. But it should be! Just because you embrace the full-growth movement shouldn\'t mean that you don\'t groom! And Antica Barbieria Colla experience is the stuff of legends. Opened by Dino Colla in 1904, this barbershop rose to prominence through its show business and international clientele. The values of attention to detail and customer care are still evident today in owner Franco Bompieri. The products they release are natural, proprietary, and luxurious, like this Antica Barbieria Colla Beard Dry Oil, Bitter Orange.',
        keywords: 'beard, oil',
        on_sale: false
      }, {
        id: 26,
        name: 'Antica Barbieria Colla Beard Shampoo, Darkwood',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Antica-Barbieria-Colla-Beard-Shampoo-Darkwood-150ml/antica-barbieria-colla-beard-shampoo-darkwood.jpg',
        rating: 4.5,
        price: 32,
        description: 'If you\'ve ever dreamed of leaning back in a barber\'s chair for the ultimate in men\'s pampering - hot towel treatment, haircut, facial hair trim, then you need to discover Antica Barbieria Colla. This prestigious, luxurious men\'s shave house resides on Via Gerolamo Morone in Milan, Italy. Turn your shaving den into a retreat with Antica Barbieria Colla Beard Shampoo, Darkwood.',
        keywords: 'beard, shampoo',
        on_sale: false
      }, {
        id: 27,
        name: 'Antica Barbieria Colla Moustache Wax, Extra Firm',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Antica-Barbieria-Colla-Moustache-Wax-Extra-Firm/antica-barbieria-colla-moustache-wax-extra-firm.jpg',
        rating: 3.5,
        price: 37,
        description: 'If you are looking for the best hot towel, pampering wet-shave on the planet, then head to Milan and find Via Gerolamo Morone. There you will discover the prestigious and highly acclaimed Antica Barbieria Colla. Since 1904, they have been serving their upscale, famous, and international clientele. But wait, you aren\'t looking for a shave? Don\'t worry that have lots of goodness for you as well, like Antica Barbieria Colla Moustache Wax, Extra Firm.',
        keywords: 'moustache, wax, firm',
        on_sale: false
      }, {
        id: 28,
        name: 'Apothecary 87 Beard Oil, Original Recipe',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Apothecary-87-Beard-Oil-Original-Recipe/apothecary-87-beard-oil-original-recipe.jpg',
        rating: 4.5,
        price: 13.99,
        description: 'An epic combination of geranium oil, jojoba oil, and other essential oils, you get the moisturizing that you need. Your unruly whiskers will soak up the attention. And all the good nourishment will mean faster, thicker, stronger growing hair. But not just your hair will benefit, so will the skin beneath. As the oil reaches your face, it will soothe redness, irritation, and itch. What\'s not to love!',
        keywords: 'beard, oil',
        on_sale: true
      }, {
        id: 29,
        name: 'Apothecary 87 Beard Oil, The Unscented',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Apothecary-87-Beard-Oil-The-Unscented/apothecary-87-beard-oil-unscented.jpg',
        rating: 3.5,
        price: 12.99,
        description: 'If you love your beard, you probably have a favorite beard oil. If you want to love your beard but struggle with itchiness and irritation, then you probably don\'t have a beard oil. But with so many to choose from, how do you decide? Apothecary 87 would like to offer their Unscented option for your consideration.',
        keywords: 'beard, oil',
        on_sale: true
      }, {
        id: 30,
        name: 'Apothecary 87 Powerful Moustache Wax, Original Recipe',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Apothecary-87-Powerful-Moustache-Wax-Original-Recipe-16g/apothecary-87-powerful-moustache-wax-original-recipe.jpg',
        rating: 4.5,
        price: 13.99,
        description: 'YFor the dastardliest, most dramatic \'stache, get the most powerful wax. When you need to twirl those ends and style that lip rug, then you need a great strong holding product. Apothecary 87 has you covered.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 31,
        name: 'Beard Balm Naked, Fragrance Free',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Beard-Balm-Naked-Fragrance-Free/beard-balm-naked.jpg',
        rating: 4,
        price: 15.99,
        description: 'This all-natural, leave-in beard conditioner is filled with moisturizing and nourishing ingredients. It offers a light hold to control your whiskers, but the money is in the way it stops dry, itchy skin, split ends, tangles, and frizz. It even brings out the natural sheen in your facial hair. It is loaded with amazing ingredients sourced locally or free-traded: grape seed and coconut oils, lanolin, and beeswax.',
        keywords: 'beard, balm, all-natural, fragrance-free, leave-in, conditioner',
        on_sale: true
      }, {
        id: 32,
        name: 'Beardbrand Silver Line Beard Softener, Spiced Citrus',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Beardbrand-Silver-Line-Beard-Softener-Spiced-Citrus-8-45-fl-oz-250ml/beardbrand-beard-softener-spiced-citrus.jpg',
        rating: 4,
        price: 27,
        description: 'Spiced Citrus is so good you might be tempted to eat it. Part of the Silver Collection, it is the mid-range of Beardbrand\'s lines, as such it contains three or fewer essential oils for scent. This bearded gentleman\'s dream has notes of citrus, clove, and vanilla.',
        keywords: 'beard, softener',
        on_sale: false
      }, {
        id: 33,
        name: 'Beardbrand Silver Line Beard Softener, Tea Tree',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Beardbrand-Silver-Line-Beard-Softener-Tea-Tree-8-45-fl-oz-250ml/beardbrand-beard-softener-tea-tree.jpg',
        rating: 3.5,
        price: 25,
        description: 'When you are looking for a brand that understands growing a beard -- then look to Beardbrand. These guys don\'t just make good products, they eat, sleep, and breath beards. So, when they tell you\'ve they\'ve designed a product specially formulated for beards, you can expect great things. Try their new Beardbrand Silver Line Beard Softener, Tea Tree.',
        keywords: 'beard, softener',
        on_sale: true
      }, {
        id: 34,
        name: 'Benjamin Barber Beard Oil, Black Oak',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Benjamin-Barber-Beard-Oil-Black-Oak/benjamin-barber-beard-oil-black-oak.jpg',
        rating: 3.5,
        price: 38.99,
        description: 'You know it. That beard is sexy. Manly. Virile. Well, it is if you don\'t look unkempt, scruffy, and destitute. Take care of your face forest with a high quality beard oil. Let Benjamin Barber Beard Oil, Black Oak tame your mane and nourish it too.',
        keywords: 'beard, oil, scented',
        on_sale: false
      }, {
        id: 35,
        name: 'Benjamin Barber Beard Oil, Natural',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Benjamin-Barber-Beard-Oil-Natural/benjamin-barber-beard-oil-natural.jpg',
        rating: 4,
        price: 35.01,
        description: 'If you are rockin\' a chin mullet, then you need a beard oil. No argument! Don\'t like the scented stuff? No problem. Don\'t like the mess? We have you covered. Allergies and skin sensitivites? Stop already, we got what you need. Benjamin Barber is bringing the facial hair love to you with a line of products made with care. Try Benjamin Barber Beard Oil, Natural and see if they can\'t make a believer out of you.',
        keywords: 'beard, oil, natural',
        on_sale: true
      }, {
        id: 36,
        name: 'BEY SHAVE Beard & Hair Oil',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/BEY-SHAVE-Beard-Hair-Oil/bey-shave-beard-hair-oil.jpg',
        rating: 5,
        price: 26.99,
        description: 'BEY SHAVE started with one man\'s passion to create exceptional shaving products for those with sensitive skin. The result is a growing line of unique, natural, high-quality tonics. The newest product is BEY SHAVE Beard & Hair Oil.',
        keywords: 'beard, oil, natural',
        on_sale: false
      }, {
        id: 37,
        name: 'Big Red Beard Comb No.7, Cherry',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Big-Red-Beard-Comb-No-7-Cherry/big-red-beard-comb-no-7-cherry.jpg',
        rating: 3.5,
        price: 23.99,
        description: 'Yep! Your beard needs a comb, too. And when it is one from Big Red Beard Company, the hair on your head will be jealous. These stunning tools are handcrafted from natural lumber, designed and built tough enough for any beard length.',
        keywords: 'beard, wood, comb',
        on_sale: false
      }, {
        id: 38,
        name: 'Big Red Beard Comb No.9, Walnut',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Big-Red-Beard-Comb-No-9-Walnut/big-red-beard-comb-no-9-walnut.jpg',
        rating: 3.5,
        price: 22.49,
        description: 'Slip this little beauty into your pocket and "stay groomed, gentlemen". Big Red Beard Combs are crafting exceptional combs to keep you looking your best.',
        keywords: 'beard, comb, handcrafted, wood',
        on_sale: true
      }, {
        id: 39,
        name: 'Billy Jealousy Beard Control',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Billy-Jealousy-Beard-Control/billy-jealousy-beard-control.jpg',
        rating: 4,
        price: 20,
        description: 'Men often find it unnecessary to regularly wash their beards. What they don\'t know is that just like hair on their heads, their beards also need a heavy-duty conditioner to achieve control and keep it from being too wiry. The Billy Jealousy Beard Control helps smooth, style, and define.',
        keywords: 'beard, control, conditioner, moisturizing',
        on_sale: false
      }, {
        id: 40,
        name: 'Billy Jealousy Beard Wash',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Billy-Jealousy-Beard-Wash/billy-jealousy-beard-wash.jpg',
        rating: 4,
        price: 20,
        description: 'Growing a beard is easy, but if you want it to look good, it also entails commitment and responsibility. Just like your hair, nails, and other body parts, your beard also needs some tender loving care. Stubble can cause itchiness; aside from this, dirt, sweat, and oil can buildup on that tuft of hair and underneath the surface. Clean, soften, and detangle those unruly beards with the Billy Jealousy Beard Wash.',
        keywords: 'beard, wash',
        on_sale: false
      }, {
        id: 41,
        name: 'Billy Jealousy Gnarly Sheen Refining Beard Oil',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Billy-Jealousy-Gnarly-Sheen-Refining-Beard-Oil/billy-jealousy-gnarly-sheen-refining-beard-oil.jpg',
        rating: 4,
        price: 24,
        description: 'Even if you color outside the lines, break the rules, or march to the beat of your own drum, there\'s no reason you can\'t look great while doing it. If your gnarly facial hair gets out of hand, look to Billy Jealousy to keep it in line. Use their Gnarly Sheen Refining Beard Oil so you can keep being epic.',
        keywords: 'beard, oil, natural',
        on_sale: false
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));"
      );
    });
};
