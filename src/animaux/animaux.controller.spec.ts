import { Test, TestingModule } from '@nestjs/testing';
import { AnimauxController } from './animaux.controller';
import { AnimauxService } from './animaux.service';
import { Animaux } from './interfaces/animaux.interface';
import { getModelToken } from '@nestjs/mongoose';

describe('AnimauxController', () => {
  let animauxController: AnimauxController;
  let animauxService: AnimauxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimauxController],
      providers: [AnimauxService],
    }).compile();

    animauxController = module.get<AnimauxController>(AnimauxController);
    animauxService = module.get<AnimauxService>(AnimauxService);
  });

  describe('findAllByUser', () => {
    it('findAllByUser', async () => {
      const userId = '646b2a110dc9f4d729923096';
      const expectedAnimaux: Partial<Animaux>[] = [
        {
          _id: "648e11efd89e6e7755e9aceb",
          id_utilisateur: "646b2a110dc9f4d729923096",
          nom: "MilouFinal",
          age: 11,
          race: "chiengue",
          sexe: false,
          is_castre: true,
          habitude: "Croquettes",
          comportement: "Neutre",
          __v: 0
        },
        {
          _id: "648e1436d89e6e7755e9acf9",
          id_utilisateur: "646b2a110dc9f4d729923096",
          nom: "MilouSuperFinal",
          age: 12,
          race: "superchien",
          sexe: true,
          is_castre: false,
          habitude: "Frites",
          comportement: "Super",
          __v: 0
        },
        {
          _id: "648e14f3b1952048a343b87f",
          id_utilisateur: "646b2a110dc9f4d729923096",
          nom: "MilouVraimentFini",
          age: 4,
          race: "chieeeennnnnn",
          sexe: false,
          poids: "12",
          is_castre: true,
          habitude: "Croquettes 250g",
          comportement: "comportmeent blalba",
          __v: 0
        }
      ];

    jest.spyOn(animauxService, 'findAllByUser').mockResolvedValueOnce(expect.arrayContaining(expectedAnimaux));

    const result = await animauxController.findAllByUser(userId);

    expect(animauxService.findAllByUser).toHaveBeenCalledWith(userId);
    expect(result).toEqual(expect.arrayContaining(expectedAnimaux));
    });
  });
});