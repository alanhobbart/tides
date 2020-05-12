import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../tailwind.generated.css';
import { Tile } from './tile';

export default {
  title: 'Tile',
  component: Tile,
};

const tides= ['Monday 20th at 12:30', 'Monday 21 at 01:20'];
export const Default = () => <Tile time="in 2 hours at 12:55" tides={tides}></Tile>;