import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import Router from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import IndODishLogo from '@/components/IndODishLogo';
import styles from '@/styles/pages/SignIn.module.scss';
import { Playfair_Display } from 'next/font/google';
import {
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import BatikBackground from '../../public/batik-background.webp';
import Link from 'next/link';
import { signIn } from '@/features/authSlice';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function SignIn() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleShowPasswordButton = () => setShow(!show);

  const handleSignIn = () => {
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (user) {
      Router.push('/');
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>IndODish - Sign In</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.container} ${playfairDisplay.className}`}>
        <header>
          <IndODishLogo color={'#ffffff'} />
          <h2>Sign In</h2>
        </header>
        <main>
          <FormControl>
            <FormLabel mt={4} style={{ color: '#ffffff' }}>
              Email address
            </FormLabel>
            <Input
              mt={2}
              size='lg'
              type='email'
              variant='filled'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor='#e37300'
              placeholder='Email Address'
              _focus={{
                backgroundColor: '#ffffff',
              }}
            />
            <FormLabel mt={4} style={{ color: '#ffffff' }}>
              Password
            </FormLabel>
            <InputGroup mt={2}>
              <Input
                size='lg'
                type={show ? 'text' : 'password'}
                variant='filled'
                focusBorderColor='#e37300'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                _focus={{
                  backgroundColor: '#ffffff',
                }}
              />
              <InputRightElement width='4.5rem' marginBlock='1' marginEnd='2'>
                <Button
                  h='2rem'
                  size='lg'
                  onClick={handleShowPasswordButton}
                  variant='solid'
                  colorScheme='yellow'
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              mt={12}
              type='submit'
              width={'100%'}
              colorScheme='orange'
              onClick={handleSignIn}
            >
              {isLoading ? <Spinner /> : 'Sign in'}
            </Button>
          </FormControl>
          <Text
            style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}
          >
            Don’t have an account ?
            <Link
              style={{ color: '#f8d72a', marginLeft: '1rem' }}
              href='/sign-up'
            >
              Register here
            </Link>
          </Text>
          <Image
            className={styles.batik_background}
            src={BatikBackground}
            alt='Batik Background'
            fill
          />
        </main>
      </div>
    </>
  );
}
