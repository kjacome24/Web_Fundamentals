lista1 = [1, 2, 3]
print(lista1)


lista1.insert(0, ["Hola","Chao"])

print(lista1)

lista1[0].insert(2,"Bye")

print(lista1)

variablepop = lista1.pop()
print(lista1,variablepop )


#Notacion de rangos
lista3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
newlist = lista3[2:6:2]
print(newlist)

print(lista3[-1])
print(lista3[-1::-1])#Go back one by one


#como podemos saber el largo de una lista
print(len(lista3))
len(lista3[2:6:2])

mitad = len(lista3)//2#La division tiene doble slash
print(lista3[-1:mitad-1:-1])


########Tuplas : Son iguales a las listas pero son inmutables(No modificables)

tupla1 = (1, ["One", "Two"], 3, 4)
print(tupla1)

tupla1[1].pop()

print(tupla1)

###########Range 
Rango1 = range(-5, 5, 1)
print(Rango1[1])
print(Rango1[2::2])

print("Rango como lista", list(Rango1))
print("Rango como lista", tuple(Rango1))





#Diccionarios: El dic es un tipo de dato compuesto que permite el acceso a sus elementos. 
dict1 = {
    "llave1": "Elemento asociado a la llave 1",
    "llave2": "Elemento asociado a la llave 2",
}

print (dict1["llave1"])