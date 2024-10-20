package edu.example.basicscodelab.plantdetail

import androidx.compose.ui.platform.ViewCompositionStrategy

class PlantDetailFragment : Fragment() {
    override fun onCreateView(...): View? {
        val binding = DataBindingUtil.inflate<FragmentPlantDetailBinding>(
            inflater, R.layout.fragment_plant_detail, container, false
        ).apply {
            ...
            composeView.apply {
                // Dispose the Composition when the view's LifecycleOwner
                // is destroyed
                setViewCompositionStrategy(
                    ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed
                )
                setContent {
                    MaterialTheme {
                        PlantDetailDescription(plantDetailViewModel)
                    }
                }
            }
        }
        ...
    }
}