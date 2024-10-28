import ExpoModulesCore
import SwiftUI

class PeelEffectExpoView: ExpoView {
  required init(appContext: AppContext? = nil) {
    let hostingController = UIHostingController(rootView: PeelEffectView())
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}

extension ExpoView {
  func setupHostingController(_ hostingController: UIHostingController<some View>) {
    hostingController.view.translatesAutoresizingMaskIntoConstraints = false
    hostingController.view.backgroundColor = .clear

    addSubview(hostingController.view)
    NSLayoutConstraint.activate([
      hostingController.view.topAnchor.constraint(equalTo: topAnchor),
      hostingController.view.bottomAnchor.constraint(equalTo: bottomAnchor),
      hostingController.view.leftAnchor.constraint(equalTo: leftAnchor),
      hostingController.view.rightAnchor.constraint(equalTo: rightAnchor)
    ])
  }
}
