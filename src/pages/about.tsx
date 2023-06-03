import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Head from 'next/head';
import styles from '@/styles/pages/About.module.scss';
import { Card, CardBody } from '@chakra-ui/react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function About() {
  return (
    <>
      <Head>
        <title>IndODish - About</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={`${styles.container} ${playfairDisplay.className}`}>
        <Card>
          <CardBody paddingInline={'2rem'}>
            <h2>Welcome to Our Food Journey!</h2>
            <p>
              At Our Food Journey, we believe that food is not just about
              satisfying hunger—it's a delightful exploration of cultures,
              traditions, and stories. We are an innovative food delivery app
              that goes beyond simply delivering meals; we strive to educate and
              inspire our customers about the rich and diverse world of
              Indonesian cuisine.
            </p>
            <p>
              Indonesia, with its thousands of islands, boasts a treasure trove
              of culinary delights. From Sumatra to Papua, Java to Bali, each
              region has its own unique flavors, ingredients, and cooking
              techniques. Our mission is to showcase this gastronomic heritage
              and introduce it to food lovers everywhere.
            </p>
            <p>
              With Our Food Journey, you can embark on a culinary adventure
              without leaving your doorstep. We partner with skilled local
              chefs, passionate home cooks, and traditional eateries to bring
              you an authentic taste of Indonesia. Every dish tells a story and
              carries a piece of Indonesian culture. We take pride in preserving
              and sharing these culinary traditions, ensuring they are
              accessible to anyone with an appetite for exploration.
            </p>
            <p>
              What sets us apart is our commitment to education. We believe that
              understanding the origins and intricacies of a dish enhances the
              overall dining experience. Our app provides detailed descriptions
              of each menu item, along with its history, regional influences,
              and cultural significance. We want you to savor every bite with a
              deeper appreciation and knowledge of the dish you're enjoying.
            </p>
            <p>
              Beyond offering a wide selection of traditional Indonesian dishes,
              Our Food Journey also embraces innovation. We collaborate with
              talented chefs to create contemporary twists on classic recipes,
              blending old and new flavors to surprise and delight your taste
              buds. We strive to strike a balance between tradition and
              innovation, ensuring that Indonesian cuisine continues to evolve
              while respecting its roots.
            </p>
            <p>
              Our user-friendly app interface makes ordering seamless and
              convenient. You can explore various categories, filter by region,
              dietary preferences, or ingredients, and discover new flavors that
              suit your palate. We are dedicated to quality, and our partners
              prioritize using fresh, locally sourced ingredients to ensure the
              most authentic and delicious meals arrive at your doorstep.
            </p>
            <p>
              We invite you to join us on this gastronomic expedition,
              celebrating the diversity and vibrancy of Indonesian cuisine.
              Whether you're a seasoned food enthusiast or new to Indonesian
              flavors, Our Food Journey will awaken your taste buds, expand your
              culinary knowledge, and leave you craving for more.
            </p>
            <p>
              Come, let's embark on this flavorful adventure together. Taste the
              traditions, feel the culture, and embrace the culinary wonders of
              Indonesia with Our Food Journey!
            </p>
            <p>Terima kasih! (Thank you!)</p>
            <p>The Our Food Journey Team</p>
          </CardBody>
        </Card>
        {/* <Card>
        <CardBody>
            <p>test</p>
          </CardBody>
        </Card> */}
      </main>
      <Footer />
    </>
  );
}