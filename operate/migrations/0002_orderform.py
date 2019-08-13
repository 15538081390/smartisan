# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2019-08-12 12:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('operate', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orderform',
            fields=[
                ('oid', models.AutoField(primary_key=True, serialize=False)),
                ('ordernumber', models.IntegerField(unique=True)),
                ('uid', models.IntegerField()),
                ('pcid', models.IntegerField()),
                ('invoice', models.IntegerField(default=0)),
                ('emil', models.CharField(max_length=128, null=True)),
                ('number', models.IntegerField()),
                ('time', models.DateField()),
            ],
            options={
                'db_table': 'orderform',
                'managed': False,
            },
        ),
    ]