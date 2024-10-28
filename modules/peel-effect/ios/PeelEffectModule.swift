import ExpoModulesCore

public class PeelEffectModule: Module {

  public func definition() -> ModuleDefinition {

    Name("PeelEffect")

    View(PeelEffectExpoView.self) {

    }
  }
}
