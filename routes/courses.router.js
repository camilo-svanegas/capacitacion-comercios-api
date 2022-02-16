const faker = require('faker');
const express = require('express');

const router = express.Router();

//Obtener todos los cursos
router.get('/', (req, res) => {
  res.json([
    {
      title: 'Manejo de fraudes online',
      image: faker.image.imageUrl(),
      description: faker.commerce.productDescription(),
      features: [
        {
          content: 'Lorem ipsum'
        },
        {
          content: 'Lorem ipsum'
        }
      ],
      modules: [
        {
          title: 'Módulo 1',
          lessons: [
            {
              title: 'Lección 1 lorem',
              video: faker.image.imageUrl(),
              duration: 20,
              description: faker.commerce.productDescription(),
              features: [
                {
                  content: 'Lorem ipsum'
                },
                {
                  content: 'Lorem ipsum'
                }
              ]
            },
            {
              title: 'Lección 2 lorem',
              video: faker.image.imageUrl(),
              duration: 35,
              description: faker.commerce.productDescription(),
              features: [
                {
                  content: 'Lorem ipsum.'
                },
                {
                  content: 'Lorem ipsum.'
                }
              ]
            }
          ],
          quiz: {
            questions: [
              {
                statement: 'Lorem ipsum dolorem ?',
                options: [
                  {
                    content: 'Response 1 to question.',
                    istrue: false
                  },
                  {
                    content: 'Response 1 to question.',
                    istrue: false
                  },
                  {
                    content: 'Response 1 to question.',
                    istrue: true
                  },
                  {
                    content: 'Response 1 to question.',
                    istrue: false
                  }
                ]
              },
              {
                statement: 'Lorem ipsum dolorem ?',
                options: [
                  {
                    content: 'Response 1 to question.',
                    istrue: false
                  },
                  {
                    content: 'Response 1 to question.',
                    istrue: false
                  },
                  {
                    content: 'Response 1 to question.',
                    istrue: true
                  },
                  {
                    content: 'Response 1 to question.',
                    istrue: false
                  }
                ]
              }
            ]
          },
          materials: [
            {
              title: 'doc1.pdf'
            },
            {
              title: 'doc2.pdf'
            }
          ]
        }
      ],
      ruleversion: {
        title: '¿Qué tipo de comercio tiene?',
        options: [
          {
            title: 'Comercio de venta presente'
          },
          {
            title: 'Comercio de venta en línea'
          }
        ]
      }
    }
  ]);
});

//Obtener un curso por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      title: 'Gestión de tiendas virtuales',
      price: 0
    }
  );
});

//Obtener módulos de un curso
router.get('/:id/modules', (req, res) => {
  const { id } = req.params;
  res.json({
    id
  });
});

module.exports = router;

