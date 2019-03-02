from django.db import models

# Create your models here.
class currency(models.Model):
    currency = models.CharField(max_length=3)
