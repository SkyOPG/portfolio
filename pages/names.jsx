import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import React from 'react';
import Head from 'next/head';

export default function SkyScript(){
    return (
        <><Head>
        <meta name='title' content='SkyOPG.pro - Hall of names' />
        <meta name='description' content="just a cool idea idk" />
      </Head> <Navbar /> <Title title='Hall of names' desc='dm "skyopg." in discord to get a part here' />
            <Title title='yo name here' desc={'description 🤯'} />
        </>
    )
}
