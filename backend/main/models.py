from django.db import models

class Property(models.Model):
    address = models.TextField()
    numBed = models.IntegerField()
    numBath = models.IntegerField()
    propertyType = models.CharField(max_length=20)
    propertyCategory = models.CharField(max_length=20)
    price = models.IntegerField()
    images = models.CharField()