<div class="container">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.container {
		width: 100%;
	}

	.content {
		margin: 0 auto;
		max-width: 1920px;
		width: 95%;
	}

	@media (min-width: 480px) {
		.content {
			width: 85%;
		}
	}

	@media (min-width: 960px) {
		.content {
			width: 80%;
		}
	}

	@media (min-width: 1280px) {
		.content {
			width: 70%;
		}
	}
</style>
