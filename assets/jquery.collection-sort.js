! function( e ) {
	function t() {
		switch ( e.cookie( "productsGridList" ) ) {
			case "grid":
				e( "#toggle_grid" )
					.addClass( "active" ), e( "#toggle_list" )
					.removeClass( "active" ), e( ".product_listing_main" )
					.removeClass( "view_list" );
				break;
			case "list":
				e( "#toggle_grid" )
					.removeClass( "active" ), e( "#toggle_list" )
					.addClass( "active" ), e( ".product_listing_main" )
					.addClass( "view_list" );
				break;
			default:
				e.cookie( "productsGridList", "grid", {
					expires: 365
				} )
		}
		e( "#toggle_grid" )
			.on( "click", function() {
				e.cookie( "productsGridList", "grid", {
						expires: 365
					} ), e( this )
					.hasClass( "active" ) || ( e( "#toggle_list" )
						.removeClass( "active" ), e( this )
						.addClass( "active" ), e( ".product_listing_main" )
						.removeClass( "view_list" ) )
			} ), e( "#toggle_list" )
			.on( "click", function() {
				e.cookie( "productsGridList", "list", {
						expires: 365
					} ), e( this )
					.hasClass( "active" ) || ( e( "#toggle_grid" )
						.removeClass( "active" ), e( this )
						.addClass( "active" ), e( ".product_listing_main" )
						.addClass( "view_list" ) )
			} )
	}

	function o( o, i ) {
		function a() {
			e( "#pagination a" )
				.each( function() {
					var c = e( this )
						.attr( "href" )
						.replace( /.*page=/, "" )
						.replace( /\&.*/, "" );
					e( this )
						.attr( "href", s + "&page=" + c ), e( this )
						.click( function() {
                      		 var s = e( "body" ).scrollTop(),
                                  l = e( ".product_listing_controls" ).offset().top;
							return e( "#collection_sorted" )
								.animate( {
									opacity: 0
								}, 400 ), e( "#product_listing_preloader" )
								.addClass( "loader_on" )
								.removeClass( "loader_off" ), e( "#collection_sorted" )
								.load( e( this )
									.attr( "href" ) + " #collection_sorted > *"
									, function() {
										e.cookie( "productsQuantity", o ), e.cookie( "productsSort", i ), t(), a(), currencyToggle(), e( "#product_listing_preloader" )
											.addClass( "loader_off" )
											.removeClass( "loader_on" ), e( "#collection_sorted" )
											.animate( {
												opacity: 1
											}, 500 )
									} ), e( "html, body" ).animate({scrollTop: e( ".product_listing_controls" ).offset().top 
                    }, 500 ), e.cookie(cookiesCollectionName, c), !1
						} )
				} )
		}
		var s = window.location.toString(),
        cookiesCollectionName =  $("body").attr("id");
		s = s.indexOf( "view" ) > -1 ? s.replace( /.*view/, "" )
			.indexOf( "&" ) > -1 ? s.replace( /view=.*?&/, "view=" + o + "&" ) : s.replace( /view=.*/, "view=" + o ) : s.indexOf( "?" ) > -1 ? s + "&view=" + o : s + "?view=" + o, s = s.indexOf( "sort_by" ) > -1 ? s.replace( /.*sort_by/, "" )
			.indexOf( "&" ) > -1 ? s.replace( /sort_by=.*?&/, "sort_by=" + i + "&" ) : s.replace( /sort_by=.*/, "sort_by=" + i ) : s.indexOf( "?" ) > -1 ? s + "&sort_by=" + i : s + "?sort_by=" + i, s.indexOf( "page" ) > -1 ? s = s.replace( /.*page/, "" )
			.indexOf( "&" ) > -1 ? s.replace( /page=.*?&/, "page=1&" ) : s.replace( /page=.*/, "page=" + e.cookie(cookiesCollectionName) ) : s += s.indexOf( "?" ) > -1 ? "&page=" + e.cookie(cookiesCollectionName) : "?page=" + e.cookie(cookiesCollectionName), e( "#product_listing_preloader" )
			.addClass( "loader_on" )
			.removeClass( "loader_off" ), e( "#collection_sorted" )
			.animate( {
				opacity: 0
			}, 400 ), e( "#collection_sorted" )
			.load( s + " #collection_sorted > *", function() {
				e.cookie( "productsQuantity", o ), e.cookie( "productsSort", i ), t(), a(), currencyToggle(), e( "#product_listing_preloader" )
					.addClass( "loader_off" )
					.removeClass( "loader_on" ), e( "#collection_sorted" )
					.animate( {
						opacity: 1
					}, 500 )
			} )
	}

	function i( t ) {
		e( "#show_products_select option" )
			.each( function() {
				e( this )
					.val() == t && e( this )
					.attr( "selected", "selected" )
			} )
	}

	function a( t ) {
		e( "#sort_by_select option" )
			.each( function() {
				e( this )
					.val() == t && e( this )
					.attr( "selected", "selected" )
			} )
	}
	e( "#product_listing_preloader" )
		.addClass( "loader_off" ), e( document )
		.ready( function() {
			var s = e.cookie( "productsQuantity" )
				, c = e.cookie( "productsSort" );
			t(), s && c ? ( o( s, c ), i( s ), a( c ) ) : s && !c ? ( o( s, "manual" ), i( s ), a( "manual" ) ) : !s && c ? ( o( 6, c ), i( 6 ), a( c ) ) : ( o( 6, "manual" ), i( 6 ), a( "manual" ) ), e( "#show_products_select" )
				.on( "change", function() {
					o( e( this )
						.val(), e( "#sort_by_select" )
						.val() )
				} ), e( "#sort_by_select" )
				.on( "change", function() {
					o( e( "#show_products_select" )
						.val(), e( this )
						.val() )
				} )
		} )
}( jQuery );