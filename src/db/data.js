// import drive1 from '../asserts/computing/drive-1.jpg'
// import drive2 from '../asserts/computing/drive-2.jpg'
// import drive3 from '../asserts/computing/drive-3.jpg'
// import ricecooker1 from '../asserts/home/ricecooker-1.jpg'
// import ricecooker2 from '../asserts/home/ricecooker-2.jpg'
// import ricecooker3 from '../asserts/home/ricecooker-3.jpg'
// import ricecooker4 from '../asserts/home/ricecooker-4.jpg'
// import keyboard1 from '../asserts/computing/keyboard-1.jpg'
// import keyboard2 from '../asserts/computing/keyboard-2.jpg'
// import keyboard3 from '../asserts/computing/keyboard-3.jpg'
// import laptop1 from '../asserts/computing/laptop-1.jpg'
// import laptop2 from '../asserts/computing/laptop-2.jpg'
// import laptop3 from '../asserts/computing/laptop-3.jpg'
// import mouse1 from '../asserts/computing/mouse-1.jpg'
// import mouse2 from '../asserts/computing/mouse-2.jpg'
// import mouse3 from '../asserts/computing/mouse-3.jpg'
// import printer1 from '../asserts/computing/printer-1.jpg'
// import printer2 from '../asserts/computing/printer-2.jpg'
// import printer3 from '../asserts/computing/printer-3.jpg'
// import blender1 from '../asserts/home/blender-1.jpg'
// import blender2 from '../asserts/home/blender-2.jpg'
// import blender3 from '../asserts/home/blender-3.jpg'
// import blender4 from '../asserts/home/blender-4.jpg'
// import burner1 from '../asserts/home/burner-1.jpg'
// import burner2 from '../asserts/home/burner-2.jpg'

import heel1 from '../asserts/fashion/heel-1.jpg'
import heel2 from '../asserts/fashion/heel-2.jpg'
import heel3 from '../asserts/fashion/heel-3.jpg'
import hoodie1 from '../asserts/fashion/hoodie-1.jpg'
import hoodie2 from '../asserts/fashion/hoodie-2.jpg'
import hoodie3 from '../asserts/fashion/hoodie-3.jpg'
import hoodie4 from '../asserts/fashion/hoodie-4.jpg'
import hoodie5 from '../asserts/fashion/hoodie-5.jpg'
import sniker1 from '../asserts/fashion/snicker-1.jpg'
import sniker2 from '../asserts/fashion/snicker-2.jpg'
import sniker3 from '../asserts/fashion/snicker-3.jpg'
import sniker4 from '../asserts/fashion/snicker-4.jpg'
import sniker5 from '../asserts/fashion/snicker-5.jpg'
import Nike1 from '../asserts/featured/nike-dark-1.jpg'
import Nike2 from '../asserts/featured/nike-dark-2.jpg'
import Nike3 from '../asserts/featured/nike-bg.png'
import Bag1 from '../asserts/featured/bag-1.jpg'
import Bag3 from '../asserts/featured/bag-3.jpg'
import Hoodie1 from '../asserts/featured/h-dark-bg.png'
import Hoodie2 from '../asserts/featured/h-red-1.jpg'


const products = [
    {
        id: 1,
        img: Hoodie1,
        title: 'Black Hoodie',
        preprice: 30,
        newprice: 25,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    },
    {
        id: 2,
        img: heel1,
        title: 'Night Drark Heel',
        preprice: 300,
        newprice: 250,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 3,
        img: Bag1,
        title: 'Bagpack',
        preprice: 990,
        newprice: 850,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'bag'
    },
    {
        id: 4,
        img: Hoodie2,
        title: 'Bestie Hoodie',
        preprice: 35,
        newprice: 25,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    },
    {
        id: 5,
        img: heel2,
        title: 'High Heel',
        preprice: 750,
        newprice: 650,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 6,
        img: sniker4,
        title: 'Leather wear',
        preprice: 150,
        newprice: 100,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 7,
        img: hoodie1,
        title: 'Hoodie White',
        preprice: 90,
        newprice: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    },
    {
        id: 8,
        img: sniker1,
        title: 'Fashion Wear',
        preprice: 45,
        newprice: 35,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 9,
        img: Bag3,
        title: 'Best Bag',
        preprice: 70,
        newprice: 65,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'bag'
    },
    {
        id: 10,
        img: Nike2,
        title: 'Nike Dark',
        preprice: 80,
        newprice: 70,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 11,
        img: Nike1,
        title: 'Night Swag',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 12,
        img: Nike3,
        title: 'White Nike, Clean',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 13,
        img: heel3,
        title: 'Heel, Clean',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 14,
        img: hoodie2,
        title: 'Hoodie King',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    },
    {
        id: 15,
        img: hoodie3,
        title: 'Hoodie, Clean',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    },
    {
        id: 16,
        img: sniker2,
        title: 'Off-White Jean-on',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 17,
        img: hoodie4,
        title: 'Best Wear Hoodie',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    },
    {
        id: 18,
        img: sniker3,
        title: 'Prime Snickers',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'footwear'
    },
    {
        id: 19,
        img: hoodie5,
        title: 'Off scene',
        preprice: 170,
        newprice: 160,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque at unde ipsa non amet odio sunt dignissimos itaque eum praesentium, aut architecto nisi ut dolorem fugit ipsum? Saepe libero, placeat eius nostrum itaque dolore? Ipsam amet vero nemo quibusdam sunt, placeat modi dicta maxime obcaecati laborum dolor ipsum quidem tempore ex. Perspiciatis laudantium sapiente accusantium nam quae, error praesentium consectetur, suscipit porro veritatis corrupti consequuntur facere provident assumenda ipsa.",
        category: 'cloth'
    }
]

export default products;