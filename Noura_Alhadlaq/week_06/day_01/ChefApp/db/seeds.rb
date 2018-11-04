Chef.destroy_all

NadiaSantini = Chef.create(name: "Nadia Santini", dob: "1965-02-15", image: "http://www.nogarlicnoonions.com/wp-content/uploads/2013/04/Nadia-Santini-Chef.jpg")
AndreaMigliaccio = Chef.create(name: "Andrea Migliaccio", dob: "1980-08-29", image: "http://www.four-magazine.com/wp-content/uploads/2017/09/4351_1.jpeg")
AuroraMazzucchelli = Chef.create(name: "Aurora Mazzucchelli", dob: "1983-05-03", image: "https://gbc-cdn-public-media.azureedge.net/img44824.330x220.jpg")

Recipe.destroy_all

PineappleMaccheroni = Recipe.create(title: "Pineapple maccheroni with fresh fruit and raspberry coulis", ingredients: "1/3 pineapple, peeled, 1 apricot, 1 kiwi fruit, 1 apple, 1 pear, 75g of cream, 10g of sugar, 1 tsp vanilla extract", method: "To begin, make the coulis. Blend the raspberries lightly, then pass through a sieve to remove the seeds. Sweeten with icing sugar to taste icing sugar 250g of raspberries 2 Prepare the pineapple by slicing thinly on a mandoline, a maximum of 1.5mm 1/3 pineapple, peeled Finely dice all of the fresh fruits 1 pear 1 apricot 1 kiwi fruit 1 apple, Whip the cream in a bowl with the sugar until stiff, then stir in the vanilla extract. Combine with the diced fruits and place in a piping bag, 1 tsp vanilla extract, 75g of cream, 10g of sugar", image: "https://gbc-cdn-public-media.azureedge.net/img77920.768x512.jpg", chef_id: NadiaSantini.id)
