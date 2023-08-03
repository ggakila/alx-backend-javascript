class Animal:
    def __init__(self,species, genus):
        self.species = species
        self.genus = genus 
    
    def saySpecies(self):
        print(f"The species is {self.species}")

    def sayGenus(self):
        print(f"The genus is {self.genus}")


class Cow(Animal):
    def __init__(self,species, genus,name):
        super().__init__(species, genus)
        self.name = name

    def soundMade(self):
        print(f"{self.name} is a {self.species} and it makes Moo!")

COWOne = Cow("Masila","David","Mwendwa")
COWOne.soundMade()

from abc import ABC, abstractmethod 

class Vehicle(ABC):
    @abstractmethod
    def go(self):
        pass

    @abstractmethod
    def stop(self):
        pass

class Car(Vehicle):
    def go(self):
        print('Car driven')

    def stop(self):
        print('Car stopped')

class Motocycle(Vehicle):
    def go(self):
        print('Cycle driven')

    def stop(self):
        print('Cycle stopped')