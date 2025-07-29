const topicFilter = document.getElementById("filter-topic");
			const ageFilter = document.getElementById("filter-age");
			const groupBoxes = document.querySelectorAll(".group-box");

			function applyFilters() {
				const topic = topicFilter.value;
				const age = ageFilter.value;

				groupBoxes.forEach(box => {
				const boxTopic = box.getAttribute("data-topic");
				const boxAge = box.getAttribute("data-age");

				const topicMatch = (topic === "all" || boxTopic === topic);
				const ageMatch =
					age === "all" ||
					boxAge === age ||
					(age === "14" && (boxAge === "16" || boxAge === "14")) ||
					(age === "16" && boxAge === "16") ||
					(age === "all-ages" && boxAge === "all-ages");

				if (topicMatch && ageMatch) {
					box.style.display = "block";
				} else {
					box.style.display = "none";
				}
				});
			}

			topicFilter.addEventListener("change", applyFilters);
			ageFilter.addEventListener("change", applyFilters);