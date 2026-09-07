export function initRouterMotion(): void {
  const figures = document.querySelectorAll<HTMLElement>("figure[data-router-motion]");

  figures.forEach((figure) => {
    if (figure.dataset.initialized === "true") return;
    figure.dataset.initialized = "true";

    const scene = figure.querySelector<SVGSVGElement>("svg[data-route-scene]");

    figure.dataset.running = "false";

    if (!scene) return;

    const morphs = Array.from(scene.querySelectorAll<SVGAnimationElement>("animate[data-route-morph]"));
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inViewport = false;

    const resetSceneClock = (): void => {
      scene.pauseAnimations();
      scene.setCurrentTime(0);
    };

    resetSceneClock();
    morphs.forEach((morph) => morph.beginElement());
    scene.pauseAnimations();

    const updatePlayback = (): void => {
      const shouldRun = !motionPreference.matches && !document.hidden && inViewport;
      figure.dataset.running = String(shouldRun);

      if (shouldRun) {
        scene.unpauseAnimations();
      } else {
        scene.pauseAnimations();
      }
    };

    const handleVisibilityChange = (): void => {
      updatePlayback();
    };

    const handleMotionPreferenceChange = (): void => {
      if (motionPreference.matches) resetSceneClock();
      updatePlayback();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    if (typeof IntersectionObserver === "function") {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        inViewport = entry.isIntersecting;
        updatePlayback();
      });
      observer.observe(figure);
    } else {
      inViewport = true;
    }

    updatePlayback();
  });
}
