import React from 'react';
import { useRouter } from 'next/router'


const slug = () => {
    const rt = useRouter();
    const {slug} = rt.query;
  return (
    <div>{slug}</div>
  )
}

export default slug