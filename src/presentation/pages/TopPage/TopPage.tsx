import React from 'react';

const COURSE = [
  '                                               ',
  '                                               ',
  '                                               ',
  '             ccc                               ',
  '             ccc                               ',
  '                                               ',
  '                                               ',
  '                                               ',
  '                                               ',
  '              q   bpbpb                        ',
  '  m                                            ',
  ' mmm                                           ',
  'mmmmm    ttttmm                                ',
  'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  bbbbbbbbbbbbb',
  'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  bbbbbbbbbbbbb',
];

const COURSE_ITEM = {
  ' ': '　',
  m: '🔺',
  b: '🟫',
  t: '🌴',
  q: '❓',
  p: '🪣',
  c: '☁️',
} as const;

const VISIBLE_SCREEN_SIZE = {
  width: 16,
  height: 16,
};

const replaceCourseItems = (row: string) =>
  Object.entries(COURSE_ITEM).reduce(
    (acc, [key, item]) => acc.replaceAll(key, item),
    row,
  );

const drawScreen = () =>
  COURSE.slice(0, VISIBLE_SCREEN_SIZE.height)
    .map((row) => row.slice(0, VISIBLE_SCREEN_SIZE.width))
    .map(replaceCourseItems)
    .join('\n');

function TopPage() {
  return (
    <main>
      <div style={{ backgroundColor: 'aliceblue', whiteSpace: 'pre-wrap' }}>
        {drawScreen()}
      </div>
    </main>
  );
}

export default TopPage;
