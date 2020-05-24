import React from 'react';
import Table from './Table';
const array = [
  {
    title: 'Temporales',
    wörter: ['vorgestern', 'gestern', 'heute', 'morgen', 'übermorgen'],
    pal: ['antes de ayer', 'ayer', 'hoy', 'mañana', 'pasado mañana'],
  },
  {
    title: 'Temporales Subjetivos',
    wörter: [
      'damals',
      'früher',
      'jetzt',
      'sofort',
      'gleich',
      'bald',
      'später',
      'dann',
    ],
    pal: [
      'entonces',
      'antes',
      'ahora',
      'inmediatamente',
      'inmediatamente',
      'pronto',
      'más tarde',
      'luego',
    ],
  },
  {
    title: 'Frecuencia',
    wörter: [
      'immer',
      'fast immer',
      'meistens',
      'häufig',
      'ab und zu',
      'manchmal',
      'selten',
      'fast nie',
      'nie',
    ],
    pal: [
      'siempre',
      'casi siempre',
      'la mayoria de veces',
      'frecuentemente',
      'en ocasiones',
      'a veces',
      'más pocas veces',
      'casi nunca',
      'nunca',
    ],
  },
];

function Adverb() {
  return (
    <div className="tables-container">
      {array.map((karte, index) => {
        return (
          <Table key={index} array={karte}>
            {' '}
          </Table>
        );
      })}
    </div>
  );
}

export default Adverb;
