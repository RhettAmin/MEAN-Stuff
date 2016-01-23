app.controller('MainCtrl', ['$scope', '$stateParams', 'posts',
	function($scope, $stateParams, posts){
		$scope.blog_title = 'Blog Posts';

		$scope.posts = posts.posts[$stateParams.id];

		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '') { return; }

			$scope.posts.push( {
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: [
					{ author: 'Joe', body: 'Cool post!', upvotes: 5 },
					{ author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 5 }
				]
			} );

			$scope.title = '';
			$scope.link = '';
		};

		

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		}
	}
]);
