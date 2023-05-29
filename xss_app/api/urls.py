from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CreateListPostView



urlpatterns = [
    path('unsafe/', CreateListPostView.as_view(), name='create_list_post'),
    # path('unsafe/search/', SearchPost.as_view(), name='search_post'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]
