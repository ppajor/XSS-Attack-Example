from django.shortcuts import render
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from xss_app.models import Post
from .serializers import PostSerializer
from .factories import PostFactory


class CreateListPostView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        for i in range(5):
            book = PostFactory.create()
            serializer.save(content=book.content)


class SearchPost(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['content']
    search_fields = ['^content']
