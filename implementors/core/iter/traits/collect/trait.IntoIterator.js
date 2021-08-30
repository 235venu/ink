(function() {var implementors = {};
implementors["ink_storage"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"ink_storage/collections/struct.Bitvec.html\" title=\"struct ink_storage::collections::Bitvec\">StorageBitvec</a>","synthetic":false,"types":["ink_storage::collections::bitvec::Bitvec"]},{"text":"impl&lt;'a, K:&nbsp;'a, V:&nbsp;'a, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"ink_storage/collections/struct.HashMap.html\" title=\"struct ink_storage::collections::HashMap\">StorageHashMap</a>&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"ink_env/hash/trait.CryptoHash.html\" title=\"trait ink_env::hash::CryptoHash\">CryptoHash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"ink_primitives/key/struct.Key.html\" title=\"struct ink_primitives::key::Key\">Key</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;H as <a class=\"trait\" href=\"ink_env/hash/trait.HashOutput.html\" title=\"trait ink_env::hash::HashOutput\">HashOutput</a>&gt;::<a class=\"type\" href=\"ink_env/hash/trait.HashOutput.html#associatedtype.Type\" title=\"type ink_env::hash::HashOutput::Type\">Type</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::hashmap::HashMap"]},{"text":"impl&lt;'a, K:&nbsp;'a, V:&nbsp;'a, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"ink_storage/collections/struct.HashMap.html\" title=\"struct ink_storage::collections::HashMap\">StorageHashMap</a>&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"ink_env/hash/trait.CryptoHash.html\" title=\"trait ink_env::hash::CryptoHash\">CryptoHash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"ink_primitives/key/struct.Key.html\" title=\"struct ink_primitives::key::Key\">Key</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;H as <a class=\"trait\" href=\"ink_env/hash/trait.HashOutput.html\" title=\"trait ink_env::hash::HashOutput\">HashOutput</a>&gt;::<a class=\"type\" href=\"ink_env/hash/trait.HashOutput.html#associatedtype.Type\" title=\"type ink_env::hash::HashOutput::Type\">Type</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::hashmap::HashMap"]},{"text":"impl&lt;'a, T:&nbsp;'a, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"ink_storage/collections/struct.SmallVec.html\" title=\"struct ink_storage::collections::SmallVec\">SmallVec</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::smallvec::SmallVec"]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"ink_storage/collections/struct.Stash.html\" title=\"struct ink_storage::collections::Stash\">StorageStash</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::stash::Stash"]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"ink_storage/collections/struct.Stash.html\" title=\"struct ink_storage::collections::Stash\">StorageStash</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::stash::Stash"]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"ink_storage/struct.Vec.html\" title=\"struct ink_storage::Vec\">StorageVec</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::vec::Vec"]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"ink_storage/struct.Vec.html\" title=\"struct ink_storage::Vec\">StorageVec</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_storage/traits/trait.PackedLayout.html\" title=\"trait ink_storage::traits::PackedLayout\">PackedLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_storage::collections::vec::Vec"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()