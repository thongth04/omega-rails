# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

series = Series.create([
  {
    name:"Naruto",
    image_url:"https://i.ibb.co/jb5vVCM/naruto-0.jpg",
    description:"Twelve years before the start of the series, the Nine-Tails attacked Konohagakure destroying much of the village and taking many lives. The leader of the village, the Fourth Hokage, sacrificed his life to seal the Nine-Tails into a newborn, Naruto Uzumaki. Orphaned by the attack, Naruto was shunned by the villagers, who out of fear and anger, viewed him as the Nine-Tails itself. Though the Third Hokage outlawed speaking about anything related to the Nine-Tails, the children — taking their cues from their parents — inherited the same animosity towards Naruto. In his thirst to be acknowledged, Naruto vowed he would one day become the greatest Hokage the village had ever seen."
  },
  {
    name:"Bleach",
    image_url:"https://i.ibb.co/pnN9Fbk/bleach-0.jpg",
    description:"High school student Kurosaki Ichigo is unlike any ordinary kid. Why? Because he can see ghosts. Ever since a young age, he's been able to see spirits from the afterlife. Ichigo's life completely changes one day when he and his two sisters are attacked by an evil, hungry and tormented spirit known as a Hollow. Right in the nick of time, Ichigo and his siblings are aided by a Shinigami (Death God) named Kuchiki Rukia, whose responsibility it is to send good spirits (Pluses) to the afterlife known as Soul Society, and to purify Hollows and send them up to Soul Society. But during the fight against the Hollow, Rukia is injured and must transfer her powers to Ichigo. With this newly acquired power, so begins Kurosaki Ichigo's training and duty as a Shinigami to maintain the balance between the world of the living and the world of the dead..."
  },
  {
    name:"Dragon Ball Z",
    image_url:"https://i.ibb.co/4j2zR6y/dragonball-0.jpg",
    description:"Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice. Follows the adventures of an extraordinarily strong young boy named Goku as he searches for the seven dragon balls. These balls, when combined, can grant the owner any one wish he desires. Along the way he makes many new friends, and enemies, and he trains to become the strongest fighter in the world."
  },
  {
    name:"Inuyasha",
    image_url:"https://i.ibb.co/PFGQVzK/inuyasha-0.jpg",
    description:"Kagome Higurashi is a 15 year old schoolgirl who lives at a history-filled Japanese shrine. She is also the reincarnation of an ancient priestess named Kikyo, who guarded the sacred Shikon no Tama (Jewel of Four Souls), and who sealed away the half-demon Inuyasha who had tried to steal the jewel in order to become a full demon. Kikyo died of her wounds and had the jewel burned with her body. Kagome is one day pulled into the ancient well on her family's shrine and thrown into the past, 50 years after Kikyo's death. She befriends Kaede, the late Kikyo's sister, who realizes Kagome is Kikyo's reincarnation. They are attacked, and learn that Kagome has the Shikon no Tama, but it's actually inside her body! Kagome accidentally awakens the dog-demon Inuyasha, and frees him after the jewel has been ripped from her body. Now Inuyasha wants the jewel back, but Kagome can't let him have it. He is forced (by Kaede's magic) to wear a necklace that allows Kagome to control him with one word, 'Sit!', which sends him face-first into the ground. Kagome accidentally shatters the jewel, and now she and Inuyasha have to work together to find all the pieces before they fall into the wrong hands. Only Kagome can 'sense' where the shards are, and only Inuyasha is powerful enough to get them from the demons or people who have them. But can they stop fighting long enough to work together?"
  },
])

characters = Character.create([
  {
    name:"Uzumaki Naruto",
    image_url:"https://i.ibb.co/sFwNvM0/naruto-1.jpg",
    bio:"Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow).",
    series: series.first
  },
  {
    name:"Hatake Kakashi",
    image_url:"https://i.ibb.co/v1VnJV3/naruto-2.webp",
    bio:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7, Kakashi emphasises the importance of teamwork; he himself received this lesson, along with the Sharingan, from his childhood friend, Obito Uchiha. After the Fourth Shinobi World War, Kakashi becomes Konoha's Sixth Hokage (六代目火影, Rokudaime Hokage, literally meaning: Sixth Fire Shadow).",
    series: series.first
  },
  {
    name:"Uchiha Itachi",
    image_url:"https://i.ibb.co/FXGZg8P/naruto-3.jpg",
    bio:"Itachi Uchiha (うちはイタチ, Uchiha Itachi) was a shinobi of Konohagakure's Uchiha clan who served as an Anbu Captain. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke who sought to avenge their clan by killing Itachi. Following his death, Itachi's motives were revealed to be more complicated than they seemed and that his actions were only ever in the interest of his brother and village, making him remain a loyal shinobi of Konohagakure to the very end.",
    series: series.first
  },
  {
    name:"Jiraiya - Ero Sennin",
    image_url:"https://i.ibb.co/qMtZdfC/naruto-4.jpg",
    bio:"Jiraiya (自来也) was one of Konohagakure's Sannin. Famed as a hermit and pervert of stupendous ninja skill, Jiraiya travelled the world in search of knowledge that would help his friends, the various novels he wrote, and, posthumously, the world in its entirety – knowledge that would be passed on to his godson and final student, Naruto Uzumaki.",
    series: series.first
  },
  {
    name:"Uchiha Obito",
    image_url:"https://i.ibb.co/QCCYySN/naruto-5.jpg",
    bio:"Obito Uchiha (うちはオビト, Uchiha Obito) was a member of Konohagakure's Uchiha clan. He was believed to have died during the Third Shinobi World War, his only surviving legacy being the Sharingan he gave to his teammate, Kakashi Hatake. In truth, Obito was saved from death and trained by Madara, but the events of the war left Obito disillusioned with reality, and he inherited Madara's plan to create an ideal world. Resurfacing under the names of Tobi (トビ, Tobi) and Madara Uchiha himself, Obito subtly took control of the Akatsuki, using them as a means to advance his machinations, eventually going public and starting the Fourth Shinobi World War. However, towards the war's conclusion, Obito had a change of heart and, as atonement, sacrificed his life to save the same world he sought to replace.",
    series: series.first
  },
])