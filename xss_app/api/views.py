from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend

from xss_app.models import Post
from .serializers import PostSerializer, CleanPostSerializer


class CreateListPostView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = CleanPostSerializer


# class SearchPost(generics.ListAPIView):
#     queryset = Post.objects.all()
#     serializer_class = CleanPostSerializer
#     filter_backends = [DjangoFilterBackend, filters.SearchFilter]
#     filterset_fields = ['content']
#     search_fields = ['^content']
