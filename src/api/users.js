import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const users = {
      strawHatPirates: [
        'Monkey D. Luffy',
        'Roronoa Zoro',
        'Nami',
        'Usopp',
        'Sanji',
        'Tony Tony Chopper',
        'Nico Robin',
        'Franky',
        'Brook',
      ],
      sevenWarlordsOfTheSea: [
        'Dracule Mihawk',
        'Crocodile',
        'Gecko Moriah',
        'Jimbei',
        'Boa Hancock',
        'Donquixote Doflamingo',
        'Bartholomew Kuma',
      ],
    };

    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
});

export default router;
