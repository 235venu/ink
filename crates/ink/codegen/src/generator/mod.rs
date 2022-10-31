// Copyright 2018-2022 Parity Technologies (UK) Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// Implements `AsRef` for a code generator type.
///
/// Code generators always have a shared `contract` reference to the contract.
/// They need to implement this trait in order to use other code generators.
macro_rules! impl_as_ref_for_generator {
    ( $generator_name:ident ) => {
        impl ::core::convert::AsRef<ir::Contract> for $generator_name<'_> {
            fn as_ref(&self) -> &ir::Contract {
                self.contract
            }
        }
    };
}

mod arg_list;
mod as_dependency;
mod blake2b;
mod chain_extension;
mod contract;
mod dispatch;
mod env;
mod events;
mod ink_test;
mod item_impls;
mod metadata;
mod selector;
mod storage;
mod storage_item;
mod trait_def;

use quote::ToTokens;
use syn::Attribute;

pub use self::{
    arg_list::{
        generate_argument_list,
        generate_reference_to_trait_info,
        input_bindings,
        input_bindings_tuple,
        input_types,
        input_types_tuple,
        output_ident,
    },
    as_dependency::ContractReference,
    blake2b::Blake2x256,
    chain_extension::ChainExtension,
    contract::Contract,
    dispatch::Dispatch,
    env::Env,
    events::Events,
    ink_test::InkTest,
    item_impls::ItemImpls,
    metadata::Metadata,
    selector::{
        SelectorBytes,
        SelectorId,
    },
    storage::Storage,
    storage_item::StorageItem,
    trait_def::TraitDefinition,
};

/// Check if the the conditional compilation expression
/// for any `cfg` attributes is satisfied.
///
/// # Example
/// If we have an annotated item (e.g. message)
/// ```ignore
/// #[ink(message)]
/// #[cfg(feature = "foo")]
/// #[cfg(feature = "baz")]
/// pub fn get(&self) -> String {
///     self.value.clone()
/// }
/// ```
/// The function would would iterate over the `cfg` attributes
/// and return `true` if any of the feature flags are set
pub fn is_conditionally_excluded(attrs: &[Attribute]) -> bool {
    for attr_tokens in attrs
        .iter()
        .filter(|a| a.path.is_ident("cfg"))
        .map(|a| &a.tokens)
    {
        let _s = attr_tokens.to_token_stream();
        if !cfg!(_s) {
            return true
        }
    }
    false
}