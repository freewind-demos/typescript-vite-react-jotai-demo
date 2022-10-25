import React, {FC} from 'react';
import './Hello.pcss';
import {atom, useAtom} from 'jotai';

type Props = {};

const atoms = {
  name: atom('jotai')
}

export const Hello: FC<Props> = ({}) => {
  const [name, setName] = useAtom(atoms.name)
  return <div className={'Hello'}>
    <h1>Hello Jotai</h1>
    <input value={name} onChange={(event) => setName(event.target.value)}/>
    <hr/>
    {name}
  </div>;
}
