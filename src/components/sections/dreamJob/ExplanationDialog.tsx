import Dialog from '@/components/ui/Dialog/Dialog';
import React from 'react';
import { featuresContent } from './jobContent';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const ExplanationDialog = ({ dictionary }: { dictionary: Dictionary }) => {
  const sortedContent = featuresContent
    .map((feature) => ({
      name: getTranslation(dictionary, [
        'dreamJobSection',
        'tags',
        feature.name,
      ]),
      explanation: getTranslation(dictionary, [
        'dreamJobSection',
        'explanations',
        feature.name,
      ]),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Dialog
      triggerText={getTranslation(dictionary, [
        'dreamJobSection',
        'modal',
        'trigger',
      ])}
      title={getTranslation(dictionary, ['dreamJobSection', 'modal', 'title'])}
      triggerClassName="underline transition-transform hover:scale-95"
      contentClassName="z-20"
    >
      <ol className="mt-2 max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
        {sortedContent.map((sortedFeature) => (
          <li key={sortedFeature.name} className="border-b  py-1 pr-1">
            <span className="font-bold">{sortedFeature.name}: </span>
            {sortedFeature.explanation}
          </li>
        ))}
      </ol>
    </Dialog>
  );
};

export default ExplanationDialog;
