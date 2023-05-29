from rest_framework import serializers
from xss_app.models import Post
from django.utils.html import escape


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'


class CleanPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'

    # def to_representation(self, instance):
    #     data = super().to_representation(instance)
    #     data['content'] = escape(data['content'])
    #     print(data)
    #     return data
    def create(self, validated_data):
        validated_data['content'] = escape(validated_data['content'])
        return super().create(validated_data)
