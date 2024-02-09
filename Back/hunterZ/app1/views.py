from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from dbconnection import db
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.
class chating(APIView):
    def post(self, request):
        message = request.data.get("text")
        position = request.data.get("position")
        type = request.data.get("type")
        date = request.data.get("date")
        userId = request.data.get("userId")
        position = request.data.get("position")
        db["players"].insert_one({"text":message, "position":position,
                                  "type": type, "date":date, "userId": userId, 
                                  "position": position})
        return Response({"message": message}, status= status.HTTP_200_OK)
    def get(self, request):
        a = db["players"].find({}, {"_id": 0})
        Message = []
        for i in a :
            Message +=[i]
        res = {"listMessage" : Message}
        print(res)
        return Response(res, status=status.HTTP_200_OK)