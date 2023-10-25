"use client"
import React from 'react';
import Countdown from 'react-countdown';

const now = new Date();
const oneWeekFromNow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);

const MyCountdownComponent = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={oneWeekFromNow}
    />
  );
};

export default MyCountdownComponent;
