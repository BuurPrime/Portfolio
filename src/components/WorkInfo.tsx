import React, { FC } from 'react';

interface WorkInfoProps{
    madeToBe: string;
    madeWith: string;
    madeBy: string;
    madeIn: string;
    textColor: string;
  }

const WorkInfo: FC<WorkInfoProps> = ({ madeToBe, madeWith, madeBy, madeIn, textColor }) => {
  return (
    <div className="flex">
      <div className="pr-8 opacity-40">
        <p className={textColor}> Made to be </p>
        <p className={textColor}> Made with </p>
        <p className={textColor}> Made by </p>
        <p className={textColor}> Made in </p>
      </div>
      <div>
        <p className={textColor}> {madeToBe} </p>
        <p className={textColor}> {madeWith} </p>
        <p className={textColor}> {madeBy} </p>
        <p className={textColor}> {madeIn} </p>
      </div>
    </div>
  );
};

export default WorkInfo;
