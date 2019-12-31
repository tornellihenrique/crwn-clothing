import React from 'react';

import { SignInUpContainer } from './sign-in-up.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInUp = () => (
    <SignInUpContainer>
        <SignIn />
        <SignUp />
    </SignInUpContainer>
)

export default SignInUp;