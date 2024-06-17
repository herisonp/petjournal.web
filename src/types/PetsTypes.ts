export type PetTypes = {
  public: {
    View: {
      id: string;
      guardianId: string;
      specie: Specie;
      specieAlias: any;
      petName: string;
      gender: string;
      breedAlias: string;
      breed: Breed;
      size: Size;
      castrated: boolean;
    };
    Insert: {
      specieName: string;
      petName: string;
      gender: string;
      breedName: string;
      size: string;
      castrated: boolean;
    };
    Update: {};
  };
};

export type Specie = {
  id: string;
  name: string;
};

export type Breed = {
  id: string;
  name: string;
};

export type Size = {
  id: string;
  name: string;
};

export type Pet = PetTypes[Extract<keyof PetTypes, 'public'>];

// Pet["View"]
// to type when listing

// Pet["Insert"]
// to type when creating/inserting

// Pet["Update"]
// to type when updating
