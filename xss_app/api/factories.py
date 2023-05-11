import factory
from xss_app.models import Post


class PostFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Post

    content = factory.Faker('sentence', nb_words=3)
