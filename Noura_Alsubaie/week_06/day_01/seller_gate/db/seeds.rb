

  
Seller.destroy_all

aziz = Seller.create(name: "Abdulaziz Falah",email: "Aziz@sell.sa", rating: "5", location: "Riyadh" )
sultan = Seller.create(name: "Sultan Salman",email: "Sultan@sell.sa", rating: "4.5", location: "Jeddah" )


Product.destroy_all

p1 = Product.create(name: "Head Phones", price: 2100.00, description: "8GB RAM offers smooth multitasking and graphic rendering Ethernet, Wi-Fi and Bluetooth provide additional functionalities and connectivity 500GB storage space provides enough space for a variety of media", seller_id: aziz.id )
p2 = Product.create(name: "A40 TR Gaming Headset", price: 470.90, description: "Tuned for Gaming with ASTRO Audio: optimized by ASTRO audio engineers and pro gamersSuperior Fit & Finish: premium materials and construction, highly adjustable and lightweightMod Kit Ready: Customizable Speaker Tags: personalize your headset with our magnetic speaker tag system; Host Interface: Mini-phone", seller_id: aziz.id )
p3 = Product.create(name: "Chopard diamonds watch", price: 147000.90, description: "A myriad of  sparkling diamonds dance around the mother-of-pearl guilloché dial of the Happy Diamonds Icons Watch  in 18-carat rose gold. Its finely crafted oval case plays beautifully with transparency, as five signature moving diamonds dance between two sapphire crystals, in a stunning display of light and love.", seller_id: sultan.id )

p4 = Product.create(name: "Chopard ROSE GOLD AND DIAMONDS RING", price: 39000.50, description: "18-carat rose gold is a precious  addition to the Happy Diamonds collection. Two contrasting hearts are delicately juxtaposed on the finger in a marriage of sparkling harmony. The larger is set with diamonds, the smaller encases a single Chopard moving diamond that dances playfully to the tune of contemporary womanhood—bold, radiant, free-spirited, living life to the full.", seller_id: sultan.id )


