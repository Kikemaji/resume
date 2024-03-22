import Dialog from '@/components/ui/Dialog/Dialog';
import React from 'react';
import { featuresContent } from './jobContent';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const ExplanationDialog = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <Dialog
      triggerText={'Te las explico aquí'}
      title="Explicación términos"
      triggerClassName="hover:underline"
      contentClassName="z-20"
    >
      <ol className="mt-2 max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
        {featuresContent.map((feature) => (
          <li key={feature.name} className="border-b  py-1 pr-1">
            <span className="font-bold">
              {getTranslation(dictionary, [
                'dreamJobSection',
                'tags',
                feature.name,
              ])}
              :{' '}
            </span>
            {getTranslation(dictionary, [
              'dreamJobSection',
              'explanations',
              feature.name,
            ])}
          </li>
        ))}
      </ol>
    </Dialog>
  );
};

export default ExplanationDialog;
